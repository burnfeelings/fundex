import React from 'react';

interface VideoProps {
  src: string;
  title?: string;
}

export function Video({ src, title }: VideoProps) {
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');
  
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.includes('youtu.be') 
      ? url.split('youtu.be/')[1]
      : url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
      {isYouTube ? (
        <iframe
          src={getYouTubeEmbedUrl(src)}
          title={title || "Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <video
          src={src}
          controls
          className="absolute inset-0 w-full h-full object-cover"
          title={title || "Video"}
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}