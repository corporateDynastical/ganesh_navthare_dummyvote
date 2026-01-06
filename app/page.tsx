"use client";
import { useRef, useState } from "react";

const SoundCheck = () => {
  const buttonSoundRef = useRef<HTMLAudioElement | null>(null); // sound1
  const otherButtonSoundRef = useRef<HTMLAudioElement | null>(null); // sound2
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const playButtonSound = (index: number) => {
    try {
      buttonSoundRef.current?.play();
    } catch (e) {
      console.warn("sound play failed", e);
    }
    setActiveRow(index);
  };

  const playOtherButtonSound = (index: number) => {
    try {
      otherButtonSoundRef.current?.play();
    } catch (e) {
      console.warn("sound play failed", e);
    }
    setActiveRow(index);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 px-4 md:px-24 py-6 text-black dark:text-white">
      <h1 className="text-center text-xl font-bold mb-4 pt-2">
        पुणे महानगरपालिका सार्वत्रिक निवडणूक - २०२६ डमी मतदान यंत्र
      </h1>

      <div className="text-center mb-4 pt-2">
        <span className="bg-blue-700 font-bold text-white px-4 py-2 inline-block rounded-full">
          डेमो मतदानासाठी घड्याळ निशाणी समोरील निळे बटन दबावे
        </span>
      </div>

      <div className="text-center mb-4 pt-2">
        <span className="bg-yellow-200 text-green-800 font-bold px-4 py-2 inline-block rounded dark:bg-yellow-300">
          राष्ट्रवादी काँग्रेस पार्टीचे प्रभाग क्र. २४-ड चे अधिकृत उमेदवार
        </span>
      </div>

      <div className="overflow-x-hidden">
        <table className="w-full border-2 border-gray-400 dark:border-gray-600 table-fixed">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border-2 border-gray-400 px-1 py-1 text-center text-xs font-bold">
                क्रमांक
              </th>
              <th className="border-2 border-gray-400 px-1 py-1 text-center text-xs font-bold">
                नाव
              </th>
              <th className="border-2 border-gray-400 px-1 py-1 text-center text-xs font-bold">
                फोटो
              </th>
              <th className="border-2 border-gray-400 px-1 py-1 text-center text-xs font-bold">
                निशाणी
              </th>
              <th className="border-2 border-gray-400 px-1 py-1 text-center text-xs font-bold">
                बत्ती
              </th>
              <th className="border-2 border-gray-400 px-1 py-1 text-center text-xs font-bold">
                बटन
              </th>
            </tr>
          </thead>

          <tbody>
            {[...Array(10)].map((_, index) => (
              <tr key={index} className="bg-blue-300 dark:bg-gray-800">
                <td className="border-2 border-gray-400 px-1 py-1 text-center font-bold text-sm">
                  {index + 1}
                </td>

                {/* ❌ NOTA removed — only candidate on row 4 */}
                <td className="border-2 border-gray-400 px-1 py-1 text-center font-bold text-sm">
                  {index === 3 ? "गणेश शांताराम नवथरे" : ""}
                </td>

                <td className="border-2 border-gray-400 px-1 py-1 text-center">
                  {index === 3 ? (
                    <img src="/user.png" className="w-12 h-12 mx-auto object-cover" />
                  ) : (
                    <div className="w-10 h-10 mx-auto" />
                  )}
                </td>

                <td className="border-2 border-gray-400 px-1 py-1 text-center">
                  {index === 3 ? (
                    <img
                      src="/symbol-bartan.png"
                      className="w-10 h-10 mx-auto object-contain"
                    />
                  ) : (
                    <div className="w-10 h-10 mx-auto" />
                  )}
                </td>

                {/* बत्ती */}
                <td className="border-2 border-gray-400 px-1 py-1 text-center bg-white dark:bg-gray-800">
                  <div
                    className={`w-5 h-5 rounded-full mx-auto ${
                      activeRow === index ? "bg-red-600" : "bg-gray-300 dark:bg-gray-500"
                    }`}
                  ></div>
                </td>

                {/* बटन */}
                <td className="border-2 border-gray-400 px-1 py-1 text-center bg-white dark:bg-gray-800">
                  <button
                    onClick={() =>
                      index === 3 ? playButtonSound(index) : playOtherButtonSound(index)
                    }
                    className={`h-7 rounded-full ${
                      index === 3 ? "bg-green-500 w-14" : "bg-blue-700 w-14"
                    }`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="text-center text-xl font-bold mb-4 mt-6">
        <span className="text-red-600">घड्याळ</span> या निशाणी समोरील बटन दाबून{" "}
        <span className="text-red-600">गणेश शांताराम नवथरे </span> यांना प्रचंड बहुमतांनी विजय करा.
      </h1>

      <div className="text-center mb-4 pt-2">
        <span className="bg-yellow-200 text-green-800 font-bold px-4 py-2 inline-block rounded">
          मतदान - गुरुवार, दि. १५ जानेवारी २०२६ सकाळी ७:३० ते सायंकाळी ५.३० वाजेपर्यंत.
        </span>
      </div>

      <audio ref={buttonSoundRef} src="/sound1.mp3" />
      <audio ref={otherButtonSoundRef} src="/sound2.mp3" />
    </section>
  );
};

export default SoundCheck;
