import React, { useEffect, useState } from "react";
import { Lightbulb } from "lucide-react";

const DailyFact = () => {
  const [fact, setFact] = useState("Loading interesting fact...");

  useEffect(() => {
    fetch("http://numbersapi.com/1/30/date?json")
      .then((response) => response.json())
      .then((data) => setFact(data.text))
      .catch(() =>
        setFact(
          "Did you know? Regular physical activity can reduce your risk of heart disease by up to 35%."
        )
      );
  }, []);

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div
          className="bg-white rounded-lg shadow-lg p-6 -mt-12 relative z-20"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-6">
            <div className="text-blue-600 text-4xl">
              <Lightbulb />
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-2">
                Today's Fitness Fact
              </h5>
              <p className="text-gray-600">{fact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyFact;
