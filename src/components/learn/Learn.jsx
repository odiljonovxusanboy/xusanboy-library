import opa from "../../assets/opa.png"
import "./Learn.css";

function Learn() {
  return (
    <section className="learn">
      <h2 className="learn-title">What will you learn?</h2>

      <div className="learn-container">

        <div className="learn-cards">

          <div className="learn-card">
            <span>01</span>
            <p>
              Use HDFS & Map Reduce for storing & analyzing data at scale.
            </p>
          </div>

          <div className="learn-card">
            <span>02</span>
            <p>
              Consume streaming data using Spark Streaming, Flink, and Storm.
            </p>
          </div>

          <div className="learn-card">
            <span>03</span>
            <p>
              Choose an appropriate data storage technology for your application
            </p>
          </div>

          <div className="learn-card">
            <span>04</span>
            <p>
              Analyze non-relational data using HBase, Cassandra, and MongoDB.
            </p>
          </div>

        </div>

        <div className="learn-image">
          <img src={opa} alt="Woman reading a book" />
        </div>

      </div>
    </section>
  );
}

export default Learn;
