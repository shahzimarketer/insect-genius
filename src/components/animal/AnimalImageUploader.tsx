import React, { useCallback, useState } from 'react';
import { Upload, Image as ImageIcon, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimalImageUploaderProps {
  onImageSelect: (file: File, preview: string) => void;
  isLoading?: boolean;
  selectedImage?: string | null;
  onClear?: () => void;
}

const AnimalImageUploader: React.FC<AnimalImageUploaderProps> = ({
  onImageSelect,
  isLoading = false,
  selectedImage,
  onClear,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          onImageSelect(file, reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    [onImageSelect]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          onImageSelect(file, reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    [onImageSelect]
  );

  if (selectedImage) {
    return (
      <div className="relative w-full max-w-lg mx-auto animate-scale-in">
        <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border">
          <img
            src={selectedImage}
            alt="Selected animal"
            className="w-full h-64 object-cover"
          />
          {isLoading && (
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <Loader2 className="w-10 h-10 text-accent animate-spin mx-auto mb-3" />
                <p className="text-foreground font-medium">Identifying animal...</p>
                <p className="text-muted-foreground text-sm">Analyzing image patterns</p>
              </div>
            </div>
          )}
          {!isLoading && onClear && (
            <button
              onClick={onClear}
              className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
              aria-label="Remove image"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative w-full max-w-lg mx-auto p-8 rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer group",
        isDragging
          ? "border-accent bg-accent/10 scale-105"
          : "border-border hover:border-accent/50 bg-card-gradient"
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        aria-label="Upload animal image"
      />
      
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent/20 transition-colors">
          {isDragging ? (
            <ImageIcon className="w-10 h-10 text-accent animate-pulse" />
          ) : (
            <Upload className="w-10 h-10 text-muted-foreground group-hover:text-accent transition-colors" />
          )}
        </div>
        
        <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
          Upload Animal Image
        </h3>
        <p className="text-muted-foreground mb-4">
          Drag and drop your image here, or click to browse
        </p>
        
        <Button variant="nature" size="lg" className="pointer-events-none">
          <Upload className="w-5 h-5 mr-2" />
          Choose Image
        </Button>
        
        <p className="text-sm text-muted-foreground mt-4">
          Supports JPG, PNG, WebP • Max 10MB
        </p>
      </div>
    </div>
  );
};

export default AnimalImageUploader;
