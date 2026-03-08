function ProgressBar({ progress }) {

  return (
    <div style={styles.container}>

      <div
        style={{
          ...styles.progress,
          width: `${progress}%`
        }}
      >
        {progress}%
      </div>

    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    background: "#eee",
    borderRadius: "5px",
    height: "20px",
    marginTop: "10px"
  },
  progress: {
  height: "100%",
  background: "#4CAF50",
  color: "white",
  textAlign: "center",
  borderRadius: "5px",
  transition: "width 0.5s ease"
}
};

export default ProgressBar;