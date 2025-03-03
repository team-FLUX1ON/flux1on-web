import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1A1A1A] text-gray-400 pt-16 pb-20">
      <div className="mx-auto w-[72%] gap-8 flex flex-col">
        <div className="grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-lg:gap-y-6">
          <div className="flex flex-col gap-y-3">
            <h3 className="text-white mb-2 text-base font-medium">FLUXION</h3>
            <Link to="/discord" className="hover:text-white text-sm">
              디스코드
            </Link>
            <Link to="/blog" className="hover:text-white text-sm">
              Tech Blog
            </Link>
            <Link to="/about" className="hover:text-white text-sm">
              소개
            </Link>
            <Link to="/terms" className="hover:text-white text-sm">
              이용약관
            </Link>
            <Link to="/privacy" className="hover:text-white text-sm">
              개인정보 처리방침
            </Link>
          </div>
          
          <div className="flex flex-col gap-y-3">
            <h3 className="text-white mb-2 text-base font-medium">문제들</h3>
            <Link to="/problems" className="hover:text-white text-sm">
              전체 문제
            </Link>
            <Link to="/workbooks" className="hover:text-white text-sm">
              문제집
            </Link>
            <Link to="/categories" className="hover:text-white text-sm">
              분류
            </Link>
            <Link to="/ungraded" className="hover:text-white text-sm">
              채점하지 않은 문제
            </Link>
          </div>
          
          <div className="flex flex-col gap-y-3">
            <h3 className="text-white mb-2 text-base font-medium">대회</h3>
            <Link
              to="/official-contests"
              className="hover:text-white text-sm"
            >
              공식 대회
            </Link>
            <Link to="/club-contests" className="hover:text-white text-sm">
              동아리 대회
            </Link>
          </div>
          
          <div className="flex flex-col gap-y-3">
            <h3 className="text-white mb-2 text-base font-medium">상점</h3>
            <Link to="/usage-history" className="hover:text-white text-sm">
              이용내역
            </Link>
            <Link to="/coin-shop" className="hover:text-white text-sm">
              코인 상점
            </Link>
            <Link to="/limited-exchange" className="hover:text-white text-sm">
              한정 교환소
            </Link>
            <Link to="/storage" className="hover:text-white text-sm">
              보관소
            </Link>
          </div>
          
          <div className="flex flex-col gap-y-3">
            <h3 className="text-white mb-2 text-base font-medium">채점 현황</h3>
            <Link to="/judging-status" className="hover:text-white text-sm">
              채점 현황
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 text-sm">
          <h2 className="text-white font-medium mb-2">FLUXION - 당신의 아이디어가 빛을 발할때</h2>
          <p>대표: 김태우</p>
          <a href="tel:010-4890-1466">전화번호: 010-4890-1466</a>
          <a href="mailto:tw080401@naver.com">이메일: tw080401@naver.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
