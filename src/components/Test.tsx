import { useState } from "react";

// the subjects as a union type for better type safety
type Subject = "Math" | "English" | "Science";

// Configuration constant - easy to modify if requirements change
const TOTAL_MODULES = 10;

const StudyProgressTracker = () => {
  // State to track completion progress for each subject
  // Using Record type ensures we have entries for all subjects
  const [progress, setProgress] = useState<Record<Subject, number>>({
    Math: 0,
    English: 0,
    Science: 0,
  });

  /**
   * Handles marking a module as complete for a given subject
   * Uses Math.min to prevent going over the maximum modules
   * @param subject - The subject to increment progress for
   */
  const handleMarkComplete = (subject: Subject) => {
    setProgress((prev) => ({
      ...prev,
      [subject]: Math.min(prev[subject] + 1, TOTAL_MODULES),
    }));
  };

  /**
   * Handles decrementing progress (useful for undoing mistakes)
   * Uses Math.max to prevent negative values
   * @param subject - The subject to decrement progress for
   */
  const handleMarkIncomplete = (subject: Subject) => {
    setProgress((prev) => ({
      ...prev,
      [subject]: Math.max(prev[subject] - 1, 0),
    }));
  };

  /**
   * Resets all progress back to zero
   * Useful for starting a new study cycle
   */
  const handleResetAll = () => {
    setProgress({
      Math: 0,
      English: 0,
      Science: 0,
    });
  };

  // Calculate overall statistics for motivation
  const totalCompleted = Object.values(progress).reduce(
    (sum, completed) => sum + completed,
    0
  );
  const totalModules = Object.keys(progress).length * TOTAL_MODULES;
  const overallProgress = Math.round((totalCompleted / totalModules) * 100);

  // Subject configuration with emojis and colors for visual appeal
  const subjectConfig = {
    Math: { emoji: "🔢", color: "bg-blue-500", lightColor: "bg-blue-100" },
    English: { emoji: "📖", color: "bg-green-500", lightColor: "bg-green-100" },
    Science: {
      emoji: "🔬",
      color: "bg-purple-500",
      lightColor: "bg-purple-100",
    },
  };

  return (
    <>
      {/* Plus Jakarta Sans font from Google Fonts CDN */}
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <div className="w-full max-w-2xl p-8 space-y-8 bg-white shadow-xl rounded-2xl">
          {/* Header Section */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">
              📚 Study Progress Tracker
            </h1>
            <p className="text-gray-600">
              Track your learning journey across different subjects
            </p>
          </div>

          {/* Overall Progress Summary */}
          <div className="bg-gray-50 rounded-xl p-6 space-y-3">
            <h2 className="text-lg font-semibold text-gray-700">
              Overall Progress
            </h2>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-indigo-600">
                {overallProgress}%
              </span>
              <span className="text-sm text-gray-600">
                {totalCompleted} / {totalModules} total modules
              </span>
            </div>
            {/* Overall progress bar */}
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full transition-all duration-500 ease-out"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>

          {/* Individual Subject Progress */}
          <div className="space-y-6">
            {(["Math", "English", "Science"] as Subject[]).map((subject) => {
              const completed = progress[subject];
              const percent = Math.round((completed / TOTAL_MODULES) * 100);
              const config = subjectConfig[subject];
              const isCompleted = completed >= TOTAL_MODULES;

              return (
                <div
                  key={subject}
                  className={`space-y-4 p-6 rounded-xl border-2 transition-all duration-300 ${
                    isCompleted
                      ? "border-green-200 bg-green-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  {/* Subject header with progress info */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{config.emoji}</span>
                      <span className="text-xl font-semibold text-gray-800">
                        {subject}
                      </span>
                      {/* Completion badge */}
                      {isCompleted && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          ✅ Complete!
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-700">
                        {percent}%
                      </div>
                      <div className="text-sm text-gray-500">
                        {completed} / {TOTAL_MODULES} modules
                      </div>
                    </div>
                  </div>

                  {/* Progress bar with smooth animation */}
                  <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                    <div
                      className={`${config.color} h-full transition-all duration-700 ease-out`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  {/* Action buttons */}
                  <div className="flex justify-between items-center">
                    {/* Progress info */}
                    <div className="text-sm text-gray-600">
                      {completed === 0 && "Ready to start!"}
                      {completed > 0 &&
                        completed < TOTAL_MODULES &&
                        "Keep going! 💪"}
                      {completed === TOTAL_MODULES && "Subject mastered! 🎉"}
                    </div>

                    {/* Control buttons */}
                    <div className="flex space-x-2">
                      {/* Undo button - only show if there's progress to undo */}
                      {completed > 0 && (
                        <button
                          onClick={() => handleMarkIncomplete(subject)}
                          className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg transition-colors duration-200 border border-gray-300"
                          title="Undo last module"
                        >
                          ↶ Undo
                        </button>
                      )}

                      {/* Complete module button */}
                      <button
                        onClick={() => handleMarkComplete(subject)}
                        className={`px-4 py-2 text-white text-sm font-medium rounded-lg transition-all duration-200 ${
                          isCompleted
                            ? "bg-gray-400 cursor-not-allowed"
                            : `${config.color} hover:opacity-90 active:scale-95`
                        }`}
                        disabled={isCompleted}
                      >
                        {isCompleted ? "✓ All Done" : "+ Complete Module"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reset button - only show if there's any progress */}
          {totalCompleted > 0 && (
            <div className="flex justify-center pt-4">
              <button
                onClick={handleResetAll}
                className="px-6 py-2 bg-red-100 hover:bg-red-200 text-red-700 font-medium rounded-lg transition-colors duration-200 border border-red-200"
              >
                🔄 Reset All Progress
              </button>
            </div>
          )}

          {/* Motivational message based on overall progress */}
          <div className="text-center">
            {overallProgress === 0 && (
              <p className="text-gray-600 italic">
                Start your learning journey today! 🚀
              </p>
            )}
            {overallProgress > 0 && overallProgress < 50 && (
              <p className="text-blue-600 italic">
                Great start! Keep up the momentum! 📈
              </p>
            )}
            {overallProgress >= 50 && overallProgress < 100 && (
              <p className="text-indigo-600 italic">
                You're more than halfway there! 🌟
              </p>
            )}
            {overallProgress === 100 && (
              <p className="text-green-600 font-semibold">
                🎊 Congratulations! You've mastered all subjects! 🎊
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyProgressTracker;
