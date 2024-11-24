"use client";

import { Avatar, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { truncateText } from "utils/strings";
import Appointment from "models/appointment.model";
import { formatISODateTime } from "utils/time";
import { useRouter } from "next/navigation";
import Row from "@/components/ui/Row";

const StyledBox = styled(Box)({
  width: "90%",
  height: 320,
  padding: 8,
  backgroundColor: "#ffffff",
  borderRadius: 5,
  paddingTop: 32,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  border: "1px solid #A5100866",
  cursor: "pointer",
});

const StyledTypography = styled(Typography)({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

type AppointmentCardProp = {
  appointment: Appointment;
};

export const AppointmentCard = ({ appointment }: AppointmentCardProp) => {
  const { id, appointmentTime, patientDetail } = appointment;
  const { profilePictureUrl, name } = patientDetail;
  //
  const router = useRouter();
  const { formattedDate, formattedTime } = formatISODateTime(appointmentTime);

  const handleOnclick = () => router.push(`/appointments/${id}`);
  return (
    <StyledBox onClick={handleOnclick}>
      <Avatar
        src={profilePictureUrl}
        sx={{
          width: 120,
          height: 120,
          fontSize: 48,
          fontWeight: "600",
          marginBottom: 1.5,
        }}
      >
        {name[0]}
      </Avatar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingX={1}
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          textTransform: 'capitalize'
        }}
      >
        <Typography textOverflow="ellipsis" fontWeight="700">
          {name}
        </Typography>
        <Divider
          sx={{ color: "#00000033", marginY: 2, borderBottomWidth: "1px" }}
          flexItem
        />
        <Row width="200px" textOverflow="ellipsis">
          <Typography color="#1B1999" fontSize={13}>
            ID{" "}
          </Typography>
          <Typography color="#1B1999" fontSize={13}>
            {id}
          </Typography>
        </Row>
        <Row width="200px">
          <Typography color="#00000099" fontSize={13}>
            {formattedDate}
          </Typography>
          <Typography color="#00000099" fontSize={13}>
            {formattedTime}
          </Typography>
        </Row>
      </Box>
    </StyledBox>
  );
};
