import React from 'react';

// 3. HeaderSection component
type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

const HeaderSection: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div>
    <div>
          <h2 className="mb-2 text-2xl font-bold bg-clip-text text-transparent"
        style={{
          backgroundImage: 'linear-gradient(90deg, #000000 4.62%, #8E6EFF 102.8%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-T-600 text-base sm:text-lg">{subtitle}</p>
      )}
    </div>

     
    </div>
  );
};

export default HeaderSection;
