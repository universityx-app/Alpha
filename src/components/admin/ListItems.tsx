import { Link } from "react-router-dom";

interface ListItemsProps {
  id: string;
  name: string;
  edit?: string;
}

const ListItems = ({id, name, edit = "edit-faculty" }: ListItemsProps) => {
  return (
    <div className="rounded-md border border-[#667085] px-5 py-5 md:px-7 ">
      <div className="flex items-center justify-between">
        <p className="font-inter font-medium text-xl md:text-[2rem] leading-6 text-[#242222]">
          {name}
        </p>
        <div className="flex items-center gap-4 md:gap-12">
          <Link
            to={`${edit}/${id}`}
            className="flex items-center gap-2 font-medium font-inter text-2xl leading-6 text-[#667085]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.9386 14.5549H3.0307L5.48372 14.3288C5.82698 14.2953 6.14512 14.1446 6.38791 13.9018L15.6474 4.6423C16.0828 4.20695 16.3256 3.62928 16.3256 3.01811C16.3256 2.40695 16.0828 1.82927 15.6474 1.39393L15.053 0.799508C14.1823 -0.07119 12.667 -0.07119 11.7963 0.799508L10.6158 1.97997L2.54512 10.0507C2.30233 10.2935 2.15163 10.6116 2.12651 10.9549L1.90047 13.4079C1.87535 13.7176 1.98419 14.019 2.20186 14.2451C2.40279 14.446 2.66233 14.5549 2.9386 14.5549ZM13.4288 1.37718C13.6967 1.37718 13.9647 1.47765 14.1656 1.68695L14.76 2.28137C14.8578 2.37752 14.9355 2.49219 14.9885 2.61868C15.0416 2.74517 15.0689 2.88095 15.0689 3.01811C15.0689 3.15527 15.0416 3.29105 14.9885 3.41755C14.9355 3.54404 14.8578 3.6587 14.76 3.75486L14.0233 4.4916L11.9553 2.42369L12.6921 1.68695C12.893 1.48602 13.1609 1.37718 13.4288 1.37718ZM3.37395 11.0721C3.37395 11.0218 3.39907 10.98 3.43256 10.9465L11.0595 3.31114L13.1274 5.37904L5.50046 13.006C5.50046 13.006 5.41674 13.0646 5.37488 13.0646L3.17302 13.2656L3.37395 11.0637V11.0721ZM18 17.2256C18 17.5688 17.7153 17.8535 17.3721 17.8535H0.627907C0.284651 17.8535 0 17.5688 0 17.2256C0 16.8823 0.284651 16.5976 0.627907 16.5976H17.3721C17.7153 16.5976 18 16.8823 18 17.2256Z"
                fill="#333333"
                fill-opacity="0.68"
              />
            </svg>
            edit
          </Link>
          <Link
            to={`${id}`}
            className={`transition ease-in-out duration-200`}
          >
            <svg
              width="18"
              height="11"
              viewBox="0 0 18 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.71484L9 9.21484L16.5 1.71484"
                stroke="#101828"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
      {/* <div
        className={`${
          isOpen ? "max-h-[100px] opacity-100 pt-5" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 ease-in-out flex gap-3 items-center`}
      >
        {children.slice(0, 3).map((list, index) => (
          <Link
            key={index}
            to={``}
            className="rounded-[30px] border-2 border-[#667085] py-[5px] px-[15px] font-inter font-medium text-xl leading-6 text-black"
          >
            {list}
          </Link>
        ))}
        {children.length > 3 ? (
          <Link to={`${name}`} className="px-5 text-[#9C2D9C]">
            More
          </Link>
        ) : null}
      </div> */}
    </div>
  );
};

export default ListItems;
