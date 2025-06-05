export const Marketing = () => {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto py-14 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex flex-col gap-4 md:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-semibold md:w-3/4">
              Driving Results with Smart Marketing
            </h1>
            <p className="font-light text-black/40">
              Here’s what our users have achieved with ADELO
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-6 w-full">
            {/* Block 1 */}
            <div className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b-2 border-gray-200 gap-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                150,000+
              </h1>
              <p className="text-end text-black/40">
                Campaign <br className="sm:hidden" /> Created
              </p>
            </div>

            {/* Block 2 */}
            <div className="py-4 grid grid-cols-2 sm:flex sm:items-center sm:justify-between border-b-2 border-gray-200 gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  1.2M+
                </h1>
                <p className="text-black/40 text-end sm:text-right">
                  AI Prompts <br className="sm:hidden" /> Run
                </p>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  92%
                </h1>
                <p className="text-black/40 text-end sm:text-right">
                  User <br className="sm:hidden" /> Satisfaction
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="py-4 grid grid-cols-2 sm:flex sm:items-center sm:justify-between border-b-2 border-gray-200 gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  500,000+
                </h1>
                <p className="text-black/40 text-end sm:text-right">
                  Feedback <br className="sm:hidden" /> Loops
                </p>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  3x
                </h1>
                <p className="text-black/40 text-end sm:text-right">
                  Avg ROI <br className="sm:hidden" /> Boost
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10 px-2 text-center">
          <h1 className="text-2xl sm:text-3xl">
            Companies currently using AI for marketing
          </h1>
        </div>
      </div>
    </div>
  );
};
