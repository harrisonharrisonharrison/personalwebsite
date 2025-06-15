import * as motion from "motion/react-client"

export default function Home() {
  return (
    <div>
      <div className="ml-[30vw]">
          <motion.div
            initial={{ y: "0px", opacity: 0}}
            animate={{ y: "100px", opacity: 1}}
          >
            <div className="text-red-400">
              harrison tran
            </div>
          </motion.div>
      </div>
      <div className="mr-[30vw]">
          <motion.div
            initial={{ y: "0px", opacity: 0}}
            animate={{ y: "100px", opacity: 1}}
            transition={{delay: 0.5}}
          >
            <div className="text-white">
              harrison tran
            </div>
          </motion.div>
      </div>
    </div>
  );
}
