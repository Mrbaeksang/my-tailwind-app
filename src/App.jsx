export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-pink-10">   // 바깥 배경 + 중앙 정렬
      <div className="bg-white p-8 rounded-lg shadow-md"> // 흰색 카드 박스
        <h1 className="text-2xl font-bold mb-4">Tailwind 첫 실습</h1>
        <p className="text-gray-700 mb-6">이건 내가 만든 카드입니다</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hove">눌러보기</button>
      </div>
    </div>
  );
}
