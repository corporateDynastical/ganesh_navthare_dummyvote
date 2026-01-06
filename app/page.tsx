
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
छत्रपती संभाजीनगर महानगरपालिका सार्वत्रिक निवडणूक - डमी मतदान यंत्र
</h1>

<div className="text-center mb-4 pt-2">
<span className="bg-blue-700 font-bold text-white px-4 py-2 inline-block rounded-full">
डेमो मतदानासाठी घड्याळ निशाणी समोरील निळे बटन दबावे
</span>
</div>

<div className="text-center mb-4 pt-2">
<span className="bg-yellow-200 text-green-800 font-bold px-4 py-2 inline-block rounded dark:bg-yellow-300">
प्रभाग क्र. १० (अ) चे अधिकृत उमेदवार
</span>
</div>

<div className="overflow-x-hidden">
<table className="w-full border-2 border-gray-400 dark:border-gray-600 table-fixed">
<thead>
<tr className="bg-gray-100 dark:bg-gray-800">
<th className="border-2 border-gray-400 dark:border-gray-600 px-1 py-1 text-center text-xs font-bold max-sm:px-0.5">क्रमांक</th>
<th className="border-2 border-gray-400 dark:border-gray-600 px-1 py-1 text-center text-xs font-bold max-sm:px-0.5">नाव</th>
<th className="border-2 border-gray-400 dark:border-gray-600 px-1 py-1 text-center text-xs font-bold max-sm:px-0.5">फोटो</th>
<th className="border-2 border-gray-400 dark:border-gray-600 px-1 py-1 text-center text-xs font-bold max-sm:px-0.5">निशाणी</th>
<th className="border-2 border-gray-400 dark:border-gray-600 px-1 py-1 text-center text-xs font-bold max-sm:px-0.5">बत्ती</th>
<th className="border-2 border-gray-400 dark:border-gray-600 px-1 py-1 text-center text-xs font-bold max-sm:px-0.5">बटन</th>
</tr>
</thead>

<tbody>
{[...Array(9)].map((_, index) => (
<tr key={index} className="bg-white dark:bg-gray-800">
<td className="border-2 border-gray-400 dark:border-gray-600 px-1 py-1 text-center font-bold text-sm max-sm:text-xs">
{index + 1}
</td>

<td className="border-2 border-gray-400 dark:border-gray-600 px-1 py-1 text-center font-bold text-sm max-sm:text-xs">
{index === 1 ? "सौ. अंबिका लक्ष्मण पखाले" : index === 8 ? "नोटा" : ""}
</td>

<td className="border-2 border-gray-400 dark:border-gray-600 px-1 py-1 text-center">
{index === 1 ? (
<img
src="/user.png"
className="w-12 h-12 mx-auto object-cover max-sm:w-12 max-sm:h-12"
/>
) : (
<div className="w-10 h-10 mx-auto max-sm:w-8 max-sm:h-8" />
)}
</td>

<td className="border-2 border-gray-400 dark:border-gray-600 px-1 py-1 text-center">
{index === 1 ? (
<img
src="/symbol-bartan.png"
className="w-10 h-10 mx-auto object-contain max-sm:w-8 max-sm:h-8"
/>
) : (
<div className="w-10 h-10 mx-auto max-sm:w-8 max-sm:h-8" />
)}
</td>

{/* Light */}
<td className="border-2 border-gray-400 dark:border-gray-600 px-1 py-1 text-center">
<div
className={`w-5 h-5 rounded-full mx-auto max-sm:w-4 max-sm:h-4 ${
activeRow === index
? "bg-red-600"
: "bg-gray-300 dark:bg-gray-500"
}`}
></div>
</td>

{/* Button */}
<td className="border-2 border-gray-400 dark:border-gray-600 px-1 py-1 text-center">
<button
onClick={() =>
index === 1
? playButtonSound(index) // फक्त उमेदवारासाठी sound1
: playOtherButtonSound(index) // NOTA + बाकी सर्व rows → sound2
}
className={`h-7 rounded-full max-sm:h-6 ${
index === 1
? "bg-green-500 w-14 max-sm:w-12"
: "bg-blue-700 w-14 max-sm:w-12"
}`}
/>
</td>
</tr>
))}
</tbody>
</table>
</div>

<h1 className="text-center text-xl font-bold mb-4 mt-6">
<span className="text-red-600">घड्याळ</span> या निशाणी समोरील बटन दाबून <span className="text-red-600">सौ. अंबिका लक्ष्मण पखाले </span> यांना प्रचंड बहुमतांनी
विजय करा.
</h1>

<div className="text-center mb-4 pt-2">
<span className="bg-yellow-200 text-green-800 font-bold px-4 py-2 inline-block rounded">
मतदान - गुरुवार, दि. १५ जानेवारी २०२६ रोजी सकाळी ७ ते सायं ६ वाजे पर्यंत.
</span>
</div>




<audio ref={buttonSoundRef} src="/sound1.mp3" />
<audio ref={otherButtonSoundRef} src="/sound2.mp3" />
</section>
);
};

export default SoundCheck;
