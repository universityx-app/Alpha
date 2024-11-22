import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const AddOptions = ({
  isAdd,
  closeToggle,
}: {
  isAdd: boolean;
  closeToggle: () => void;
}) => {
  const OptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        OptionRef.current &&
        !OptionRef.current.contains(event.target as Node)
      ) {
        closeToggle();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeToggle]);
  return (
    <div
      ref={OptionRef}
      className={`top-16 right-0 md:right-5 py-8 px-7 w-[20rem]  md:w-[33rem] h-[13rem] bg-white shadow-sm absolute border border-[#66708538] rounded-xl ${!isAdd && "hidden"}`}
    >
      <Link
        to="/dashboard/programs/create-faculty"
        className="font-inter font-medium text-2xl text-black  flex transition-colors ease-in-out items-center p-2.5 gap-2.5 rounded-[5px] hover:bg-[#6670851C]"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 16V15C16.5 14.7347 16.3946 14.4804 16.2071 14.2929C16.0196 14.1053 15.7652 14 15.5 14V7.99996C15.7652 7.99996 16.0196 7.8946 16.2071 7.70707C16.3946 7.51953 16.5 7.26518 16.5 6.99996V5.92196C16.5002 5.71101 16.449 5.50318 16.3509 5.31641C16.2528 5.12965 16.1108 4.96956 15.937 4.84996L9.237 0.228961C9.01871 0.082103 8.76159 0.00366211 8.4985 0.00366211C8.23541 0.00366211 7.97829 0.082103 7.76 0.228961L1.06 4.84796C0.886864 4.96845 0.745488 5.12908 0.647965 5.31612C0.550442 5.50315 0.499672 5.71103 0.5 5.92196V6.99996C0.5 7.26518 0.605357 7.51953 0.792893 7.70707C0.98043 7.8946 1.23478 7.99996 1.5 7.99996V14C1.23478 14 0.98043 14.1053 0.792893 14.2929C0.605357 14.4804 0.5 14.7347 0.5 15V16C0.367392 16 0.240215 16.0526 0.146447 16.1464C0.0526785 16.2402 0 16.3674 0 16.5C0 16.6326 0.0526785 16.7597 0.146447 16.8535C0.240215 16.9473 0.367392 17 0.5 17H16.5C16.6326 17 16.7598 16.9473 16.8536 16.8535C16.9473 16.7597 17 16.6326 17 16.5C17 16.3674 16.9473 16.2402 16.8536 16.1464C16.7598 16.0526 16.6326 16 16.5 16ZM1.5 5.92196C1.49965 5.87274 1.51142 5.82419 1.53426 5.78059C1.55711 5.737 1.59033 5.69969 1.631 5.67196L8.325 1.05496C8.37604 1.01983 8.43654 1.00102 8.4985 1.00102C8.56046 1.00102 8.62096 1.01983 8.672 1.05496L15.372 5.67496C15.4125 5.70259 15.4457 5.73974 15.4685 5.78315C15.4913 5.82656 15.5032 5.87491 15.503 5.92396V6.99996H1.5V5.92196ZM14.5 7.99996V14H13V7.99996H14.5ZM12 7.99996V14H10.25V7.99996H12ZM9.25 7.99996V14H7.75V7.99996H9.25ZM6.75 7.99996V14H5V7.99996H6.75ZM4 7.99996V14H2.5V7.99996H4ZM15.5 16H1.5V15H15.5V16ZM8.5 2.99996C8.20333 2.99996 7.91332 3.08793 7.66665 3.25276C7.41997 3.41758 7.22771 3.65185 7.11418 3.92594C7.00065 4.20003 6.97094 4.50163 7.02882 4.7926C7.0867 5.08357 7.22956 5.35084 7.43934 5.56062C7.64912 5.7704 7.91639 5.91326 8.20736 5.97114C8.49834 6.02902 8.79994 5.99931 9.07403 5.88578C9.34811 5.77225 9.58238 5.57999 9.7472 5.33332C9.91203 5.08664 10 4.79663 10 4.49996C10 4.10214 9.84196 3.72061 9.56066 3.4393C9.27936 3.158 8.89782 2.99996 8.5 2.99996ZM8.5 4.99996C8.40111 4.99996 8.30444 4.97064 8.22221 4.9157C8.13999 4.86076 8.0759 4.78267 8.03806 4.6913C8.00022 4.59994 7.99031 4.49941 8.00961 4.40242C8.0289 4.30543 8.07652 4.21633 8.14645 4.14641C8.21637 4.07648 8.30546 4.02886 8.40245 4.00957C8.49944 3.99028 8.59998 4.00018 8.69134 4.03802C8.7827 4.07587 8.86079 4.13995 8.91574 4.22218C8.97068 4.3044 9 4.40107 9 4.49996C9 4.63257 8.94732 4.75975 8.85355 4.85352C8.75979 4.94728 8.63261 4.99996 8.5 4.99996Z"
            fill="black"
          />
        </svg>
        Faculty
      </Link>
      <Link
        to="create-department"
        className="font-inter font-medium text-2xl text-black flex transition-colors ease-in-out items-center p-2.5 gap-2.5 rounded-[5px] hover:bg-[#6670851C]"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.55 9.85002C0.628793 9.90911 0.718454 9.95211 0.813864 9.97655C0.909274 10.001 1.00856 10.0064 1.10607 9.99248C1.20357 9.97855 1.29737 9.94555 1.38212 9.89537C1.46687 9.84519 1.54091 9.77881 1.6 9.70002C2.05409 9.09456 2.64291 8.60314 3.31983 8.26468C3.99675 7.92622 4.74318 7.75002 5.5 7.75002C6.25682 7.75002 7.00325 7.92622 7.68017 8.26468C8.35709 8.60314 8.94591 9.09456 9.4 9.70002C9.51949 9.859 9.69723 9.96402 9.89413 9.99197C10.091 10.0199 10.291 9.96853 10.45 9.84908C10.5067 9.80692 10.5569 9.7567 10.5991 9.70002C11.0532 9.09456 11.642 8.60314 12.3189 8.26468C12.9958 7.92622 13.7422 7.75002 14.4991 7.75002C15.2559 7.75002 16.0023 7.92622 16.6792 8.26468C17.3561 8.60314 17.945 9.09456 18.3991 9.70002C18.5185 9.85915 18.6963 9.9643 18.8933 9.99234C19.0903 10.0204 19.2904 9.96902 19.4495 9.84955C19.6087 9.73008 19.7138 9.55228 19.7419 9.35528C19.7699 9.15828 19.7185 8.95821 19.5991 8.79908C18.9352 7.90908 18.0499 7.20836 17.0312 6.76658C17.5897 6.25671 17.981 5.58992 18.1537 4.8537C18.3264 4.11749 18.2725 3.34626 17.9991 2.64122C17.7256 1.93619 17.2454 1.33029 16.6215 0.903054C15.9976 0.475814 15.259 0.247192 14.5028 0.247192C13.7466 0.247192 13.0081 0.475814 12.3841 0.903054C11.7602 1.33029 11.28 1.93619 11.0066 2.64122C10.7331 3.34626 10.6792 4.11749 10.8519 4.8537C11.0247 5.58992 11.4159 6.25671 11.9744 6.76658C11.2389 7.08463 10.5707 7.53994 10.0056 8.10814C9.44057 7.53994 8.7724 7.08463 8.03687 6.76658C8.59533 6.25671 8.98659 5.58992 9.15931 4.8537C9.33203 4.11749 9.27814 3.34626 9.0047 2.64122C8.73126 1.93619 8.25106 1.33029 7.62712 0.903054C7.00317 0.475814 6.26464 0.247192 5.50844 0.247192C4.75224 0.247192 4.0137 0.475814 3.38976 0.903054C2.76581 1.33029 2.28561 1.93619 2.01218 2.64122C1.73874 3.34626 1.68484 4.11749 1.85756 4.8537C2.03028 5.58992 2.42154 6.25671 2.98 6.76658C1.95686 7.20692 1.06722 7.90809 0.4 8.80002C0.340905 8.87881 0.297908 8.96847 0.273465 9.06388C0.249021 9.15929 0.243609 9.25858 0.257538 9.35608C0.271467 9.45358 0.304464 9.54739 0.354644 9.63214C0.404825 9.71689 0.471207 9.79092 0.55 9.85002ZM14.5 1.75002C14.945 1.75002 15.38 1.88198 15.75 2.12921C16.12 2.37644 16.4084 2.72785 16.5787 3.13898C16.749 3.55011 16.7936 4.00251 16.7068 4.43897C16.62 4.87543 16.4057 5.27634 16.091 5.59101C15.7763 5.90568 15.3754 6.11997 14.939 6.20678C14.5025 6.2936 14.0501 6.24904 13.639 6.07875C13.2278 5.90845 12.8764 5.62006 12.6292 5.25005C12.382 4.88004 12.25 4.44502 12.25 4.00002C12.25 3.40328 12.4871 2.83098 12.909 2.40903C13.331 1.98707 13.9033 1.75002 14.5 1.75002ZM5.5 1.75002C5.94501 1.75002 6.38002 1.88198 6.75003 2.12921C7.12004 2.37644 7.40843 2.72785 7.57873 3.13898C7.74903 3.55011 7.79358 4.00251 7.70677 4.43897C7.61995 4.87543 7.40566 5.27634 7.09099 5.59101C6.77632 5.90568 6.37541 6.11997 5.93895 6.20678C5.5025 6.2936 5.0501 6.24904 4.63896 6.07875C4.22783 5.90845 3.87643 5.62006 3.62919 5.25005C3.38196 4.88004 3.25 4.44502 3.25 4.00002C3.25 3.40328 3.48705 2.83098 3.90901 2.40903C4.33097 1.98707 4.90326 1.75002 5.5 1.75002ZM17.0312 16.5166C17.5897 16.0067 17.981 15.3399 18.1537 14.6037C18.3264 13.8675 18.2725 13.0963 17.9991 12.3912C17.7256 11.6862 17.2454 11.0803 16.6215 10.6531C15.9976 10.2258 15.259 9.99719 14.5028 9.99719C13.7466 9.99719 13.0081 10.2258 12.3841 10.6531C11.7602 11.0803 11.28 11.6862 11.0066 12.3912C10.7331 13.0963 10.6792 13.8675 10.8519 14.6037C11.0247 15.3399 11.4159 16.0067 11.9744 16.5166C11.2389 16.8346 10.5707 17.2899 10.0056 17.8581C9.44057 17.2899 8.7724 16.8346 8.03687 16.5166C8.59533 16.0067 8.98659 15.3399 9.15931 14.6037C9.33203 13.8675 9.27814 13.0963 9.0047 12.3912C8.73126 11.6862 8.25106 11.0803 7.62712 10.6531C7.00317 10.2258 6.26464 9.99719 5.50844 9.99719C4.75224 9.99719 4.0137 10.2258 3.38976 10.6531C2.76581 11.0803 2.28561 11.6862 2.01218 12.3912C1.73874 13.0963 1.68484 13.8675 1.85756 14.6037C2.03028 15.3399 2.42154 16.0067 2.98 16.5166C1.95686 16.9569 1.06722 17.6581 0.4 18.55C0.340905 18.6288 0.297908 18.7185 0.273465 18.8139C0.249021 18.9093 0.243609 19.0086 0.257538 19.1061C0.271467 19.2036 0.304464 19.2974 0.354644 19.3821C0.404825 19.4669 0.471207 19.5409 0.55 19.6C0.628793 19.6591 0.718454 19.7021 0.813864 19.7266C0.909274 19.751 1.00856 19.7564 1.10607 19.7425C1.20357 19.7285 1.29737 19.6956 1.38212 19.6454C1.46687 19.5952 1.54091 19.5288 1.6 19.45C2.05409 18.8446 2.64291 18.3531 3.31983 18.0147C3.99675 17.6762 4.74318 17.5 5.5 17.5C6.25682 17.5 7.00325 17.6762 7.68017 18.0147C8.35709 18.3531 8.94591 18.8446 9.4 19.45C9.51949 19.609 9.69723 19.714 9.89413 19.742C10.091 19.7699 10.291 19.7185 10.45 19.5991C10.5067 19.5569 10.5569 19.5067 10.5991 19.45C11.0532 18.8446 11.642 18.3531 12.3189 18.0147C12.9958 17.6762 13.7422 17.5 14.4991 17.5C15.2559 17.5 16.0023 17.6762 16.6792 18.0147C17.3561 18.3531 17.945 18.8446 18.3991 19.45C18.5185 19.6091 18.6963 19.7143 18.8933 19.7423C19.0903 19.7704 19.2904 19.719 19.4495 19.5995C19.6087 19.4801 19.7138 19.3023 19.7419 19.1053C19.7699 18.9083 19.7185 18.7082 19.5991 18.5491C18.9352 17.6591 18.0499 16.9584 17.0312 16.5166ZM5.5 11.5C5.94501 11.5 6.38002 11.632 6.75003 11.8792C7.12004 12.1264 7.40843 12.4778 7.57873 12.889C7.74903 13.3001 7.79358 13.7525 7.70677 14.189C7.61995 14.6254 7.40566 15.0263 7.09099 15.341C6.77632 15.6557 6.37541 15.87 5.93895 15.9568C5.5025 16.0436 5.0501 15.999 4.63896 15.8287C4.22783 15.6584 3.87643 15.3701 3.62919 15C3.38196 14.63 3.25 14.195 3.25 13.75C3.25 13.1533 3.48705 12.581 3.90901 12.159C4.33097 11.7371 4.90326 11.5 5.5 11.5ZM14.5 11.5C14.945 11.5 15.38 11.632 15.75 11.8792C16.12 12.1264 16.4084 12.4778 16.5787 12.889C16.749 13.3001 16.7936 13.7525 16.7068 14.189C16.62 14.6254 16.4057 15.0263 16.091 15.341C15.7763 15.6557 15.3754 15.87 14.939 15.9568C14.5025 16.0436 14.0501 15.999 13.639 15.8287C13.2278 15.6584 12.8764 15.3701 12.6292 15C12.382 14.63 12.25 14.195 12.25 13.75C12.25 13.1533 12.4871 12.581 12.909 12.159C13.331 11.7371 13.9033 11.5 14.5 11.5Z"
            fill="black"
          />
        </svg>
        Department
      </Link>
      <Link
        to="create-course"
        className="font-inter font-medium text-2xl text-black  flex transition-colors ease-in-out items-center p-2.5 gap-2.5 rounded-[5px] hover:bg-[#6670851C]"
      >
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4163 6.87562L8.91625 3.87562C8.80327 3.80025 8.67195 3.75696 8.53629 3.75039C8.40064 3.74382 8.26575 3.77421 8.14601 3.83831C8.02628 3.90241 7.9262 3.99782 7.85645 4.11436C7.7867 4.2309 7.74991 4.36419 7.75 4.5V10.5C7.74991 10.6358 7.7867 10.7691 7.85645 10.8856C7.9262 11.0022 8.02628 11.0976 8.14601 11.1617C8.26575 11.2258 8.40064 11.2562 8.53629 11.2496C8.67195 11.243 8.80327 11.1998 8.91625 11.1244L13.4163 8.12438C13.5191 8.05591 13.6035 7.96309 13.6618 7.85416C13.7202 7.74523 13.7507 7.62357 13.7507 7.5C13.7507 7.37643 13.7202 7.25477 13.6618 7.14584C13.6035 7.03691 13.5191 6.94409 13.4163 6.87562ZM9.25 9.09844V5.90625L11.6481 7.5L9.25 9.09844ZM18.25 0.75H1.75C1.35218 0.75 0.970644 0.908035 0.68934 1.18934C0.408035 1.47064 0.25 1.85218 0.25 2.25V12.75C0.25 13.1478 0.408035 13.5294 0.68934 13.8107C0.970644 14.092 1.35218 14.25 1.75 14.25H18.25C18.6478 14.25 19.0294 14.092 19.3107 13.8107C19.592 13.5294 19.75 13.1478 19.75 12.75V2.25C19.75 1.85218 19.592 1.47064 19.3107 1.18934C19.0294 0.908035 18.6478 0.75 18.25 0.75ZM18.25 12.75H1.75V2.25H18.25V12.75ZM19.75 16.5C19.75 16.6989 19.671 16.8897 19.5303 17.0303C19.3897 17.171 19.1989 17.25 19 17.25H1C0.801088 17.25 0.610322 17.171 0.46967 17.0303C0.329018 16.8897 0.25 16.6989 0.25 16.5C0.25 16.3011 0.329018 16.1103 0.46967 15.9697C0.610322 15.829 0.801088 15.75 1 15.75H19C19.1989 15.75 19.3897 15.829 19.5303 15.9697C19.671 16.1103 19.75 16.3011 19.75 16.5Z"
            fill="black"
          />
        </svg>
        Courses
      </Link>
    </div>
  );
};

export default AddOptions;