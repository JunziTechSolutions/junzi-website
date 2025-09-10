"use client";

export default function JunziTextSection() {
  return (
    <section className="w-full flex justify-center items-center py-0 -my-12 md:-my-12 my-8">
      <div 
        className="text-center"
        style={{
          width: '1300px',
          
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h1
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: 'clamp(120px, 25vw, 479.32px)',
            lineHeight: '130%',
            letterSpacing: '-2%',
            background: 'linear-gradient(97.94deg, #0B1E54 -2.89%, #4FABFF 91.06%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: 0,
            padding: 0
          }}
        >
          JUNZI
        </h1>
      </div>
    </section>
  );
} 