/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], //파일 크기를 최소화하기 위해 purge 옵션을 사용한다. 프로덕션으로 빌드할 때 여기에 설정된 파일에서 사용되지 않는 모든 클래스는 제거된다. 처음에는 purge 옵션에 "./src/**/*.{js,jsx,ts,tsx}" 만 설정되어 있었으므로, Tailwind CSS가 해당 파일들을 확인하고 사용된 클래스만 추출하여 CSS를 생성했습니다. 그러나 이러한 파일들 중에서는 HTML 파일이 없었기 때문에, HTML 파일에서 사용된 클래스는 Tailwind CSS가 인식하지 못했습니다. 따라서 HTML 파일에서 사용된 클래스는 추출되지 않고, 프로덕션 빌드에서는 해당 클래스가 제거되었을 가능성이 높습니다. 이로 인해 Tailwind CSS가 적용되지 않은 것으로 보였습니다.
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
