export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <main className="flex flex-col items-center justify-center gap-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-xs sm:text-sm font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
          <span className="inline-block h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
          Work in Progress
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-neutral-900 dark:text-neutral-50 uppercase">
          <span className="text-emerald-500 dark:text-emerald-400">CPU</span> club website in construction
        </h1>

        <p className="max-w-md text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
          Stay tuned... We&apos;re building something awesome. Check back soon!
        </p>
      </main>
    </div>
  );
}

