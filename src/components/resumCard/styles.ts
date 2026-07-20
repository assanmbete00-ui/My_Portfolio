import  { PRIMARY, WHITE } from "@constants/colors";

const styles = {
  card: {
    width: "100%",
    borderRadius: "20px",
    overflow: "hidden",
    backgroundColor: WHITE,
    transition: "0.4s ease",
    boxShadow:"0 10px 30px rgba(0,0,0,0.04)",
    
    "&:hover": {
      transform: "translateY(-6px)",
      color: PRIMARY,
    },
  },

  image: {
    width: "100%",
    height: 260,
    objectFit: "cover",
    display: "block",
  },
};

export default styles;