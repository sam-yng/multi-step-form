import React from "react";

type PlanSelectProps = {
  icon: string;
  plan: string;
  price: string;
  monthly: boolean;
  deal?: string;
};

const PlanSelect: React.FC<PlanSelectProps> = ({
  icon,
  plan,
  price,
  monthly,
  deal,
}: PlanSelectProps) => {
  return (
    <div className="border-2 border-[#d6d9e6] h-[12rem] w-[10rem] rounded-lg">
      {monthly ? (
        <article className="flex flex-col items-start p-4">
          <img className="h-12" src={icon} />
          <div className="mt-14">
            <h1 className="font-UbMedium text-[#02295a]">{plan}</h1>
            <p className="font-UbRegular">${price}/mo</p>
          </div>
        </article>
      ) : (
        <article>
          <img src={icon} />
          <h1>{plan}</h1>
          <p>${price}/yr</p>
          <p>{deal}</p>
        </article>
      )}
    </div>
  );
};

export default PlanSelect;
