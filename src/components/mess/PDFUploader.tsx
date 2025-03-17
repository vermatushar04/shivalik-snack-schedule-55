
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileUp, X, FileText } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PDFUploader = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file: File) => {
    // Check if file is a PDF
    if (file.type !== 'application/pdf') {
      toast.error('Please upload a PDF file');
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size should be less than 5MB');
      return;
    }

    setPdfFile(file);

    // Create a URL for the PDF preview
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    toast.success('PDF uploaded successfully');
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const removeFile = () => {
    setPdfFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  return (
    <div className="w-full">
      {!pdfFile ? (
        <Card
          className={`border-2 border-dashed ${
            isDragging ? 'border-primary bg-primary/5' : 'border-border'
          } transition-all duration-200`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <CardContent className="flex flex-col items-center justify-center py-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-4 p-4 bg-primary/10 rounded-full"
            >
              <FileUp className="h-10 w-10 text-primary" />
            </motion.div>
            <h3 className="text-xl font-medium mb-2">Upload Menu PDF</h3>
            <p className="text-muted-foreground text-center mb-6 max-w-md">
              Drag and drop your menu PDF file here, or click the button below to browse
            </p>
            <Button asChild>
              <label className="cursor-pointer">
                Browse Files
                <input
                  type="file"
                  accept=".pdf"
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </label>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <div className="flex items-center justify-between bg-secondary p-4 rounded-t-lg">
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium truncate max-w-xs">{pdfFile.name}</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={removeFile}
              className="hover:text-destructive"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="w-full h-[70vh] border border-border rounded-b-lg overflow-hidden">
            {previewUrl && (
              <iframe
                src={`${previewUrl}#toolbar=0`}
                className="w-full h-full"
                title="PDF Preview"
              />
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PDFUploader;
