export interface IHeartHandIconProps {
  className?: string;
}

export function HeartHandIcon({ className }: IHeartHandIconProps) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-white`}
    >
      <path d="M3.51122 5.22408C5.94322 2.79208 10.1832 2.77708 12.6182 5.21308C12.6422 5.23708 12.6642 5.26308 12.6852 5.28908C14.0762 4.21108 15.6782 3.40308 17.4622 3.39908C18.2836 3.3961 19.0974 3.55584 19.8568 3.86908C20.6161 4.18231 21.3058 4.64284 21.8862 5.22408C22.4452 5.78408 22.9092 6.38908 23.2262 7.14608C23.5442 7.90208 23.6962 8.76308 23.6942 9.80908C23.6942 12.7811 21.6472 15.6171 19.4252 17.8831C17.3272 20.0231 14.9182 21.8071 13.4512 22.8921L13.1402 23.1221C13.0105 23.2184 12.8533 23.2705 12.6917 23.2705C12.5302 23.2705 12.3729 23.2184 12.2432 23.1221L11.9312 22.8921C10.4652 21.8071 8.05622 20.0231 5.95822 17.8831C3.73822 15.6201 1.69422 12.7881 1.68822 9.82008C1.66151 8.97004 1.80952 8.12356 2.12309 7.33302C2.43665 6.54248 2.90911 5.8247 3.51122 5.22408ZM11.5442 6.26608C9.69822 4.43208 6.42022 4.44308 4.57522 6.28808C4.11425 6.74755 3.75346 7.29753 3.51561 7.90336C3.27775 8.50919 3.16798 9.15772 3.19322 9.80808C3.19322 12.1401 4.84322 14.5981 7.03222 16.8301C8.97922 18.8161 11.2162 20.4901 12.6922 21.5821C13.4213 21.0463 14.1411 20.4979 14.8512 19.9371L12.7112 17.9631C12.6386 17.8961 12.5799 17.8155 12.5384 17.7258C12.497 17.6361 12.4736 17.5392 12.4696 17.4405C12.4656 17.3418 12.4811 17.2432 12.5151 17.1505C12.5492 17.0578 12.6012 16.9727 12.6682 16.9001C12.7352 16.8275 12.8158 16.7687 12.9055 16.7273C12.9951 16.6858 13.0921 16.6624 13.1908 16.6584C13.2895 16.6544 13.388 16.6699 13.4808 16.704C13.5735 16.7381 13.6586 16.7901 13.7312 16.8571L16.0262 18.9751C16.6422 18.4551 17.2682 17.8951 17.8762 17.3031L15.7162 15.3111C15.5769 15.1739 15.4964 14.9879 15.4918 14.7925C15.4871 14.597 15.5587 14.4074 15.6913 14.2638C15.8239 14.1201 16.0072 14.0337 16.2024 14.0227C16.3976 14.0118 16.5894 14.0772 16.7372 14.2051L18.9252 16.2251C19.474 15.6326 19.9844 15.0056 20.4532 14.3481L19.8682 13.7621L18.2172 12.1101C17.1392 11.0361 15.3802 11.0551 14.2822 12.1531C13.9032 12.5331 13.5222 12.9111 13.1502 13.2791C12.0102 14.4031 10.1902 14.3561 9.08022 13.2361C8.59122 12.7411 8.10022 12.2481 7.60522 11.7541C7.47174 11.6203 7.39351 11.4412 7.3861 11.2524C7.37869 11.0636 7.44264 10.8789 7.56522 10.7351C7.79922 10.4591 8.04822 10.1591 8.31022 9.84208C9.23822 8.72208 10.3332 7.40008 11.5442 6.26608ZM21.2692 13.0361C21.8482 11.9561 22.1892 10.8691 22.1892 9.80808C22.1912 8.90908 22.0612 8.25608 21.8392 7.72808C21.6192 7.20208 21.2882 6.75408 20.8222 6.28808C20.3822 5.84686 19.859 5.49734 19.2829 5.25977C18.7068 5.0222 18.0893 4.9013 17.4662 4.90408C15.8062 4.90808 14.2162 5.85508 12.6962 7.25008C11.5162 8.33408 10.4632 9.60308 9.50822 10.7561L9.15722 11.1791C9.48822 11.5111 9.82022 11.8431 10.1502 12.1771C10.404 12.4385 10.7512 12.5885 11.1155 12.5941C11.4798 12.5997 11.8315 12.4605 12.0932 12.2071C12.4632 11.8421 12.8412 11.4671 13.2182 11.0891C14.8802 9.42608 17.5912 9.36308 19.2782 11.0441C19.8382 11.6021 20.3982 12.1641 20.9362 12.7021L21.2692 13.0361Z" />
    </svg>
  );
}
