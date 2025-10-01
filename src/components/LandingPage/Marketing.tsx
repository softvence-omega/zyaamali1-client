export const Marketing = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-14">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex flex-col gap-4 md:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-semibold md:w-3/4 text-gray-900 dark:text-white">
              Driving Results with Smart Marketing
            </h1>
            <p className="font-light text-black/60 dark:text-gray-400">
              Here's what our users have achieved with ADELO
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-6 w-full">
            {/* Block 1 */}
            <div className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b-2 border-gray-200 dark:border-gray-700 gap-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                150,000+
              </h1>
              <p className="text-end text-black/60 dark:text-gray-400">
                Campaign <br className="sm:hidden" /> Created
              </p>
            </div>

            {/* Block 2 */}
            <div className="py-4 grid grid-cols-2 sm:flex sm:items-center sm:justify-between border-b-2 border-gray-200 dark:border-gray-700 gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  1.2M+
                </h1>
                <p className="text-black/60 dark:text-gray-400 text-start">
                  AI Prompts <br className="sm:hidden" /> Run
                </p>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  92%
                </h1>
                <p className="text-black/60 dark:text-gray-400 text-end sm:text-right">
                  User <br className="sm:hidden" /> Satisfaction
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="py-4 grid grid-cols-2 sm:flex sm:items-center sm:justify-between border-b-2 border-gray-200 dark:border-gray-700 gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  500,000+
                </h1>
                <p className="text-black/60 dark:text-gray-400 text-start">
                  Feedback <br className="sm:hidden" /> Loops
                </p>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  3x
                </h1>
                <p className="text-black/60 dark:text-gray-400 text-end sm:text-right">
                  Avg ROI <br className="sm:hidden" /> Boost
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center px-2 text-center font-bold mt-20">
          <h1 className="text-2xl sm:text-4xl text-gray-900 dark:text-white">
            Companies currently using AI for marketing
          </h1>
        </div>
      </div>
    </div>
  );
};