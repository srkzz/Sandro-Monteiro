import React from 'react';
import {
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiAutodesk,
  SiMicrosoftoffice
} from 'react-icons/si';

function Iconizar() {
 return (
    <div className="flex justify-center items-center gap-4 flex-wrap">
      
      <SiAdobepremierepro size={48} color="#000000" title="Adobe Premiere Pro" />
      <SiAdobephotoshop size={48} color="#31A8FF" title="Adobe Photoshop" />
      <SiAutodesk size={48} color="#FF6F00" title="AutoCAD" />
      <SiMicrosoftoffice size={48} color="#EA3E2F" title="Office 365" />
    </div>
  );
}

export default Iconizar;
