export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-20 md:py-32"
      // style={{ background: '#f4f3fa' }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900 dark:text-slate-50 mb-6">
            Our Path to Your Product's Success.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A transparent and collaborative process designed to deliver
            exceptional results, every time.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-center w-full gap-6">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[300px] md:w-[400px] object-contain mx-auto"
        >
          <source src="/videos/phone.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <div className="w-full md:h-[800px] flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain rounded-xl"
            onLoadStart={() => console.log('Video loading started: /videos/5steps.mp4')}
            onCanPlay={() => console.log('Video can play: /videos/5steps.mp4')}
            onError={(e) => console.error('Video error:', e)}
          >
            <source src="/videos/5steps.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      </div>
    </section>
  );
}
