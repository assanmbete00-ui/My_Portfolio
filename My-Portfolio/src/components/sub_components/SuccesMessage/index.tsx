import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type Props = {
  open: boolean;

  onClose: () => void;
};

export default function SuccessMessage({
  open,
  onClose,
}: Props) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Alert
        severity="success"
        variant="filled"
      >
        Votre message a été pris en compte,
        nous vous contacterons dans 48h.
      </Alert>
    </Snackbar>
  );
}