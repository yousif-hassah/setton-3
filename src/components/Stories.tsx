import React, { useState } from "react";
import ComicPanel from "./ComicPanel";
import SpeechBubble from "./SpeechBubble";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from './image/71334e36a7f8010396776c577b67f272.jpg'
import img2 from './image/fd9b7d129a6fed978932460044caa676.jpg'
import img3 from './image/ae2fc982599a3019d7992c246f07b41f.jpg'
import img4 from './image/685da4136e1f3edc3b46adac4ddf6761.jpg'
import img5 from './image/a022c12c2c76a50a19d55e914403a707.jpg'
interface Story {
  id: number;
  title: string;
  excerpt: string;
  coverUrl: string;
  issue: number;
}

const stories: Story[] = [
  {
    id: 1,
    title: `منصة صُنّاع المستقبل`,
    excerpt: `        ( setton ) نحلم ب
 تصير المنصة الأولى بالعراق لصناعة محتوى آمن، ممتع، ويفيد أطفالنا. مكان يلتقي بيه الخيال مع التربية، ونحچي بيه قصص تشبهم، بلغتهم، وبأسلوبه 

إحنا نؤمن إنو كل طفل هو كوگب خاص بيه، عنده اهتماماته وشغفه—كوگب الرياضة، كوگب الرسم، كوگب البرمجة. ومن خلال محتوى مدروس، نحتضن هالتنوع ونشجّع كل طفل يكتشف نفسه ويبدع بطريقته`,
    coverUrl: img1,
    issue: 17,
  },
  {
    id: 2,
    title: "Setton",
    excerpt: `
 مو بس منصة، هي فضاء نفتح بيه الأبواب لصنّاع المحتوى حتى يساهمون بصنع طفولة واعية، متعلمة، ومتصالحة ويا هويتها العراقية والإنسانية.

متأثرين بروح سبيستون، بس جايين نكتب صفحة جديدة تخص أطفالنا، وتخليهم يشوفون نفسهم بالمحتوى بكل فخر.`,
    coverUrl: img2,
    issue: 28,
  },
  {
    id: 3,
    title: "إلكم أنتو، الآباء والأمهات ",
    excerpt: `                   
تحب تشوف ابنك يتعلم، يبدع، ويكون جزء من عالم المحتوى؟                      
Settonبـ 
 ، نفتح المجال إلك حتى تساهم بصناعة محتوى يخص ابنك، يعكس شخصيته، ويشجعه على التطوّر.                                 
سواء تحبون تشاركون بأفكار، كتابة، صوت، أو حتى تشجيع... وجودكم ويانا يصنع فرق كبير.`,
    coverUrl:img3,
    issue: 42,
  },

  {
    id: 4,
    title: `الطفل العراقي`,
    excerpt: `الطفل العراقي موهوب بطبعه.
يحتاج محتوى يحچيه بلغته
ويخلّيه يكتشف نفسه بثقة
          نكبر وياه  Setton بـ   
`,
    coverUrl: img4,
    issue: 33,
  },
  {
    id: 5,
    title: "فرصة للرُعاة (السپونسرز)",
    excerpt: `Setton
 همّ فرصة حقيقية لكل جهة تحب تكون جزء من صناعة جيل جديد. عدنا مجال للتعاون ويا شركات، منظمات، أو أفراد يحبّون يدعمون صنّاع محتوى للأطفال بمحتوى نضيف، أصيل، وراقي.
سواء كنت سبونسر إعلامي، تقني، أو حتى تعليمي—مكانك ويانه موجود، لأنّا نؤمن إنو مستقبل الأطفال... مسؤولية جماعية`,
    coverUrl: img5,
    issue: 50,
  },
];

const Stories: React.FC = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex(
      (prev) => (prev - 1 + stories.length) % stories.length
    );
  };

  const currentStory = stories[currentStoryIndex];

  const isArabic = (text: string) => /[\u0600-\u06FF]/.test(text);

  return (
    <section
      id="stories"
      className="py-20 bg-orange-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-dots bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ComicPanel className="inline-block bg-blue-600 border-black border-4 transform -rotate-1 py-2 px-8 shadow-lg">
            <h2 className="text-4xl font-bold uppercase text-blue-950">
              Latest Stories
            </h2>
          </ComicPanel>
        </div>

        <div className="max-w-4xl mx-auto">
          <ComicPanel className="bg-white relative">
            <div className="absolute top-2 right-2 z-10 bg-red-600 text-white font-bold py-1 px-3 transform rotate-3 border-2 border-black">
              #{currentStory.issue}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={currentStory.coverUrl}
                  alt={currentStory.title}
                  className="w-full h-auto border-4 border-black shadow-md"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h3
                  className={`text-3xl font-bold mb-3 ${
                    isArabic(currentStory.excerpt)
                      ? "text-right font-medium"
                      : ""
                  }`}
                  dir={isArabic(currentStory.title) ? "rtl" : "ltr"}
                >
                  {currentStory.title}
                </h3>

                <SpeechBubble
                  type="speech"
                  position="left"
                  
                  className={`mb-6 ${
                    isArabic(currentStory.excerpt) ? "text-right" : ""}`}>
                    <p dir={isArabic(currentStory.excerpt) ? "rtl" : "ltr"}> </p>
               
                 
                  <p className="italic whitespace-pre-line">
                    {currentStory.excerpt}
                  </p>
                </SpeechBubble>

                <button className="bg-orange-500 text-black font-bold py-2 px-6 border-2 border-black hover:bg-orange-300 transition-colors transform hover:scale-105 self-start">
                  <a href="#characters">Read Full Story</a>
                </button>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStory}
                    className="bg-blue-600 text-white p-2 rounded-full border-2 border-black hover:bg-blue-700 transition-colors"
                    aria-label="Previous story"
                  >
                    <ChevronLeft />
                  </button>

                  <div className="text-gray-700">
                    {currentStoryIndex + 1} / {stories.length}
                  </div>

                  <button
                    onClick={nextStory}
                    className="bg-blue-600 text-white p-2 rounded-full border-2 border-black hover:bg-blue-700 transition-colors"
                    aria-label="Next story"
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </ComicPanel>

          <div className="grid grid-cols-5 gap-4 mt-8 md:grid">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={`cursor-pointer transform transition-transform hover:scale-105 ${
                  index === currentStoryIndex ? "ring-4 ring-blue-600" : ""
                }`}
                onClick={() => setCurrentStoryIndex(index)}
              >
                <img
                  src={story.coverUrl}
                  alt={story.title}
                  className="w-full h-32 object-cover border-2 border-black"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
