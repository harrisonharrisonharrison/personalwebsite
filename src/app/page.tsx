import * as motion from "motion/react-client"

export default function Home() {
  return (
    <div className="ml-[30vw]">
      <motion.div
      initial={{ y: "0px", opacity: 0}}
      animate={{ y: "100px", opacity: 1}}
      >
        Harrison Tran
      </motion.div>
    </div>
  );
}
