
import React from 'react';

interface WhatsAppIconProps {
  className?: string;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.7-.8.9-.1.1-.3.2-.5.1-.2-.1-.9-.3-1.8-1.1-.7-.6-1.1-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.2.4-.4.1-.1.2-.2.2-.4.1-.1 0-.3-.1-.4-.1-.1-1.3-1.4-1.3-1.4s-.5-.5-.5-.5h-.4c-.2 0-1 .5-1.2.7-.2.2-.7 1-.2 2.1.5 1.1 1.5 2.5 2.9 3.9 1.9 1.9 3.2 2.6 4.6 2.6h.1c.9 0 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.5-.4zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
    </svg>
  );
};

export default WhatsAppIcon;
