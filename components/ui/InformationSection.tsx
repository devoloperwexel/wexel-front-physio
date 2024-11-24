import { useSession } from "next-auth/react";
import React from "react";

type Props = {
  totalAppointment: number;
};
const InformationSection = ({ totalAppointment }: Props) => {
  const { data } = useSession();
  const user = data?.user;
  const infoList = {
    physiosName: user.name,
    number: totalAppointment,
  };

  return (
    <div className="bg-white p-6 rounded-md h-full space-y-3 border border-gray-200">
      <p className="text-[12px] sm:text-[20px] font-medium mb-2 sm:mb-3">
        Welcome
      </p>
      <p className="text-[14px] sm:text-[20px] font-semibold mb-2 sm:mb-3 capitalize">
        {infoList.physiosName}
      </p>
      {!totalAppointment ? (
        <p className="text-[18px] sm:text-[24px] font-normal mb-2 sm:mb-3 flex gap-x-2">
          There are no appointments today
        </p>
      ) : (
        <p className="text-[18px] sm:text-[24px] font-normal mb-2 sm:mb-3 flex gap-x-2">
          You have{" "}
          <p className="text-primary-color font-semibold">{infoList.number} </p>
          appointments today
        </p>
      )}
    </div>
  );
};

export default InformationSection;
