import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Upload, FileText, CircleCheck as CheckCircle, ArrowLeft, Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { storageUtils } from '@/utils/storage';
import { WelderProfile } from '@/types';
import { toast } from 'sonner';
import gsap from 'gsap';

export const WelderDocuments: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<WelderProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [agreements, setAgreements] = useState({
    workContract: false,
    accommodation: false,
    invitation: false,
  });

  useEffect(() => {
    if (!user) return;

    const userProfile = storageUtils.getWelderProfile(user.id);
    if (!userProfile || !userProfile.quizScore || userProfile.quizScore < 70) {
      toast.error('Please pass the quiz first');
      navigate('/welder/quiz');
      return;
    }

    setProfile(userProfile);
    setAgreements(userProfile.agreements);

    // Animate document cards
    gsap.fromTo('.document-section', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    );
  }, [user, navigate]);

  const handleFileUpload = (field: string, file: File | null, section: 'experience' | 'documents') => {
    if (!profile) return;

    const updatedProfile = {
      ...profile,
      [section]: {
        ...profile[section],
        [field]: file,
      },
    };

    setProfile(updatedProfile);
  };

  const handleAgreementChange = (field: keyof typeof agreements, checked: boolean) => {
    setAgreements(prev => ({
      ...prev,
      [field]: checked,
    }));
  };

  const handleSubmit = async () => {
    if (!profile) return;

    // Check if all agreements are accepted
    if (!agreements.workContract || !agreements.accommodation || !agreements.invitation) {
      toast.error('Please accept all agreements to proceed');
      return;
    }

    // Check if required documents are uploaded (simulated)
    const requiredDocs = [
      'experienceCertificate',
      'pcc',
      'itr',
      'healthCertificates',
      'weldingCertificates',
    ];

    const missingDocs = requiredDocs.filter(doc => !profile.documents[doc as keyof typeof profile.documents]);
    
    if (missingDocs.length > 0) {
      toast.error('Please upload all required documents');
      return;
    }

    setLoading(true);

    try {
      const updatedProfile = {
        ...profile,
        agreements,
        status: 'under_review' as const,
        completedAt: new Date().toISOString(),
      };

      storageUtils.saveWelderProfile(updatedProfile);
      toast.success('Documents submitted for review successfully!');
      navigate('/welder/dashboard');
    } catch (error) {
      toast.error('Error submitting documents. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!profile) {
    return <Layout title="Documents"><div>Loading...</div></Layout>;
  }

  return (
    <Layout title="Document Upload">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Experience Videos */}
        <Card className="document-section">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Video className="h-5 w-5" />
              <span>Experience Videos</span>
            </CardTitle>
            <CardDescription>
              Upload videos to showcase your welding experience
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="introVideo">Self Introduction Video</Label>
                <Input
                  id="introVideo"
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleFileUpload('introVideo', e.target.files?.[0] || null, 'experience')}
                />
                {profile.experience.introVideo && (
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Video uploaded
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="weldingVideo">Welding Proof Video</Label>
                <Input
                  id="weldingVideo"
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleFileUpload('weldingProofVideo', e.target.files?.[0] || null, 'experience')}
                />
                {profile.experience.weldingProofVideo && (
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Video uploaded
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Agreements */}
        <Card className="document-section">
          <CardHeader>
            <CardTitle>Employment Agreements</CardTitle>
            <CardDescription>
              Please review and accept the following agreements
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 border rounded-lg">
                <Checkbox
                  id="workContract"
                  checked={agreements.workContract}
                  onCheckedChange={(checked) => handleAgreementChange('workContract', checked as boolean)}
                />
                <div className="space-y-1">
                  <Label htmlFor="workContract" className="font-medium">
                    Employee Work Contract
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    I agree to the terms and conditions of the employment contract for welding in Europe.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 border rounded-lg">
                <Checkbox
                  id="accommodation"
                  checked={agreements.accommodation}
                  onCheckedChange={(checked) => handleAgreementChange('accommodation', checked as boolean)}
                />
                <div className="space-y-1">
                  <Label htmlFor="accommodation" className="font-medium">
                    Accommodation Agreement
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    I accept the accommodation arrangements provided by the employer.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 border rounded-lg">
                <Checkbox
                  id="invitation"
                  checked={agreements.invitation}
                  onCheckedChange={(checked) => handleAgreementChange('invitation', checked as boolean)}
                />
                <div className="space-y-1">
                  <Label htmlFor="invitation" className="font-medium">
                    Invitation Letter
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    I acknowledge receipt and acceptance of the invitation letter for employment.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Required Documents */}
        <Card className="document-section">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Required Documents</span>
            </CardTitle>
            <CardDescription>
              Upload all required documents for verification
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="experienceCert">Experience Certificate *</Label>
                  <Input
                    id="experienceCert"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload('experienceCertificate', e.target.files?.[0] || null, 'documents')}
                  />
                  {profile.documents.experienceCertificate && (
                    <div className="flex items-center text-sm text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Document uploaded
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="weldingCerts">Welding Certificates *</Label>
                  <Input
                    id="weldingCerts"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload('weldingCertificates', e.target.files?.[0] || null, 'documents')}
                  />
                  {profile.documents.weldingCertificates && (
                    <div className="flex items-center text-sm text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Document uploaded
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="pcc">Police Clearance Certificate *</Label>
                  <Input
                    id="pcc"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload('pcc', e.target.files?.[0] || null, 'documents')}
                  />
                  {profile.documents.pcc && (
                    <div className="flex items-center text-sm text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Document uploaded
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="itr">Income Tax Return *</Label>
                  <Input
                    id="itr"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload('itr', e.target.files?.[0] || null, 'documents')}
                  />
                  {profile.documents.itr && (
                    <div className="flex items-center text-sm text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Document uploaded
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="travelTickets">Travel Tickets</Label>
                  <Input
                    id="travelTickets"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload('travelTickets', e.target.files?.[0] || null, 'documents')}
                  />
                  {profile.documents.travelTickets && (
                    <div className="flex items-center text-sm text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Document uploaded
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="healthCerts">Health Certificates *</Label>
                  <Input
                    id="healthCerts"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload('healthCertificates', e.target.files?.[0] || null, 'documents')}
                  />
                  {profile.documents.healthCertificates && (
                    <div className="flex items-center text-sm text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Document uploaded
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="vsfProof">VSF Submission Proof</Label>
                  <Input
                    id="vsfProof"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload('vsfProof', e.target.files?.[0] || null, 'documents')}
                  />
                  {profile.documents.vsfProof && (
                    <div className="flex items-center text-sm text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Document uploaded
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => navigate('/welder/dashboard')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <Button 
            onClick={handleSubmit} 
            disabled={loading}
            size="lg"
          >
            {loading ? 'Submitting...' : 'Submit for Review'}
          </Button>
        </div>
      </div>
    </Layout>
  );
};