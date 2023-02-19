import { Locale } from "@/types/Locale";
import IconButton from "@mui/material/IconButton/IconButton";
import { useTranslation } from "next-i18next";
import { useRef } from "react";
import CheckIcon from "@mui/icons-material/Check";

// import {  styled } from "@mui/material";

export interface Props {
  onSelected: (params: any) => void;
  locale: Locale;
}

// const StyledNativeSelect = styled(NativeSelect)(({ theme }) => ({
//   color: theme.palette.primary.main,
// }));

function SelectNumberOfChildren(props: Props) {
  const { t } = useTranslation("common");
  const totalChildrenRef = useRef<HTMLInputElement>(null);

  const selectedValue = () => {
    const children = totalChildrenRef.current?.value;
    if (children !== undefined || children !== null) {
      const childrenAsInt: number = +children!;
      console.log("total children: ", childrenAsInt);
      props.onSelected(childrenAsInt);
    }
  };

  return (
    <div className="input-control children">
      <label htmlFor="totalChildren">{t("rsvp.numberOfChildren")}</label>
      <div className="child-input">
        <input required type="text" id="totalChildren" ref={totalChildrenRef} />
        <IconButton
          type="submit"
          onClick={selectedValue}
          sx={{
            paddingBottom: "12px",
          }}
        >
          <CheckIcon
            sx={{
              color: "#b97b52",
              "&:hover": {
                color: "#8f683d",
              },
            }}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default SelectNumberOfChildren;
