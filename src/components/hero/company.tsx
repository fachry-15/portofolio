import { type FC } from 'react';
import { InfiniteSlider } from '../ui/infinite-slider'
import { ProgressiveBlur } from '../ui/progressive-blur'

const Company: FC = () => {
  return (
    <section className="bg-background overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">company experience and education</p>
          </div>
          <div className="relative py-10 md:w-[calc(100%-11rem)]">
            <InfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={80}
            >
                            <div className="flex items-center px-4 py-4">
                <img
                  className="mx-auto h-10 w-auto object-contain dark:invert"
                  src="/company/1.svg"
                  alt="RRI Surabaya Logo"
                  height={40}
                  width="auto"
                />
              </div>

              <div className="flex items-center px-6 py-4">
                <img
                  className="mx-auto h-9 w-auto object-contain dark:invert"
                  src="/company/2.svg"
                  alt="Dicoding Logo"
                  height={36}
                  width="auto"
                />
              </div>
              <div className="flex items-center px-6 py-4">
                <img
                  className="mx-auto h-10 w-auto object-contain"
                  src="/company/3.svg"
                  alt="Polije Logo"
                  height={40}
                  width="auto"
                />
              </div>
              <div className="flex items-center px-6 py-4">
                <img
                  className="mx-auto h-9 w-auto object-contain dark:invert"
                  src="/company/4.svg"
                  alt="Edspert Logo"
                  height={36}
                  width="auto"
                />
              </div>
              <div className="flex items-center px-6 py-4">
                <img
                  className="mx-auto h-10 w-auto object-contain"
                  src="/company/5.svg"
                  alt="Apple Academy Logo"
                  height={40}
                  width="auto"
                />
              </div>
              <div className="flex items-center px-6 py-4">
                <img
                  className="mx-auto h-9 w-auto object-contain dark:invert"
                  src="/company/6.svg"
                  alt="Laravel Logo"
                  height={36}
                  width="auto"
                />
              </div>
              <div className="flex items-center px-6 py-4">
                <img
                  className="mx-auto h-10 w-auto object-contain dark:invert"
                  src="/company/7.svg"
                  alt="RRI Surabaya Logo"
                  height={40}
                  width="auto"
                />
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
