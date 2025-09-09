import React from "react";
import { FaTwitter, FaDiscord, FaTelegram } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="bg-dark">
      <section className="d-flex flex-column justify-content-center align-items-center text-center py-5 w-100 bg-light bg-gradient border border-5 rounded-2 shadow">
        <h1 className="display-5 fw-bold text-gradient">
          Welcome to Melissa’s Portfolio
        </h1>
        <p
          className="lead mt-3 px-3"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Your go-to KOL and Web3 marketer, building impact through strategy,
          community, and creativity.
        </p>
      </section>

      <div className="container-fluid py-5 text-center">
        <div className="row align-items-center justify-content-center mb-5">
          {/* Profile Image */}
          <div className="col-md-4 mb-4 mb-md-0 text-center">
            <img
              src={`${import.meta.env.BASE_URL}melissa.jpg`}
              alt="Profile"
              className="rounded-circle border border-3 border-primary"
              style={{ width: "400px", height: "400px", objectFit: "cover" }}
            />
          </div>

          {/* Quote */}
          <div className="col-md-6 text-md-start text-center">
            <blockquote className="blockquote">
              <p className="fs-4 fst-italic text-light">
                “Web3 isn’t just the future — it’s the present we’re building
                together.”
              </p>
              <footer className="blockquote-footer text-info mt-2">
                Melissa
              </footer>
              <p className="text-light">
                <span className="text-gradient">Hobbies</span>: Reading, writing
                thought pieces, hosting conversations, traveling, and exploring
                new tech innovations.
              </p>
            </blockquote>
          </div>
        </div>
        <h1 className="mt-3 fw-bold text-light">
          Hi, I’m <span className="text-gradient">Melissa</span>
        </h1>
        <h4 className="text-primary">Fully in Web3</h4>
        <p className="text-light fs-4">
          as a KOL, Marketer, Macro Ambassador, Growth Strategist, Space Host
        </p>

        {/* Socials */}
        <div className="d-flex justify-content-center gap-3 mt-5 fs-3 flex-wrap">
          <span className="text-light">Socials:</span>
          <a
            href="https://x.com/0xmelissa19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-info" />
          </a>

          <a
            href="https://discord.gg/vVV24ynZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="text-light" />
          </a>

          <a
            href="https://t.me/vera1294"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="text-primary" />
          </a>
        </div>

        {/* On-chain Identity */}
        <div
          className="card bg-secondary text-light mt-5 mx-auto"
          style={{ maxWidth: "300px" }}
        >
          <div className="card-body">
            <h5 className="card-title text-info fs-2">On-Chain Identity</h5>
            <p className="card-text">
              SOLANA: 7165rzMTpR1ruu185nHnBfetQ4b1aeGSRpn29sA5U7FX
            </p>
            <p className="card-text">
              EVM: 0x2f80d74b39bb18d29202f36bbdbff494f4787e65
            </p>
          </div>
        </div>

        <div className="text-light mt-5">
            <h2 className="text-primary"> Experience</h2><br />
          <p className="fs-4 bg-secondary h-100 rounded w-100">Over 3 years in the Web3 space, supporting 10+ projects
          across growth, community building, content strategy, and partnerships.
          Specialized in crafting narratives that connect users to protocols,
          leading 50+ community activations, and hosting 100+ Twitter Spaces
          with thousands of combined listeners. Proven track record of driving
          millions in market cap growth, NFT sellouts, and scaling communities
          by thousands of members/followers.</p>
        </div>

        {/* Experience */}
        <div style={{ marginTop: "3rem" }}>
          <h2 className="fw-bold text-primary fs-1">Projects Worked For</h2>
          <div className="row mt-3 g-4">
            <div className="col-12 col-md-6">
              <div className="card bg-secondary h-100">
                <div className="card-body">
                  <h5 className="card-title fs-2" style={{ color: "#1E90FF" }}>
                    •Ugly Ducks
                  </h5>
                  <a
                    className="mt-5"
                    href="https://x.com/uglyducklabz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-info fs-2 mt-2" />
                  </a>
                  <p className="card-text text-light fs-4">
                    Job: Supported their NFT sales campaign, helping them sell
                    out nearly their entire collection.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card bg-secondary h-100">
                <div className="card-body">
                  <h5 className="card-title fs-2" style={{ color: "#1E90FF" }}>
                    •Bonga Meme
                  </h5>
                  <a
                    className="mt-5"
                    href="https://x.com/bongasolana"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-info fs-2 mt-2" />
                  </a>
                  <p className="card-text text-light fs-4">
                    Job: Drove growth by scaling market cap from $100K to over
                    $5M through targeted engagement and strategy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card bg-secondary h-100">
                <div className="card-body">
                  <h5 className="card-title fs-2" style={{ color: "#1E90FF" }}>
                    •Backpack Exchange
                  </h5>
                  <a
                    className="mt-5"
                    href="https://x.com/backpack"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-info fs-2 mt-2" />
                  </a>
                  <p className="card-text text-light fs-4">
                    Job: Contributed over 500 direct referrals and generated
                    $500K in trading volume within a month.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card bg-secondary h-100">
                <div className="card-body">
                  <h5 className="card-title fs-2" style={{ color: "#1E90FF" }}>
                    •Golden Donkey
                  </h5>
                  <a
                    className="mt-5"
                    href="https://x.com/goldendonkeygdk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-info fs-2 mt-2" />
                  </a>
                  <p className="card-text text-light fs-4">
                    Job: Helped successfully sell out 1,000 NFTs from their
                    collection.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card bg-secondary h-100">
                <div className="card-body">
                  <h5 className="card-title fs-2" style={{ color: "#1E90FF" }}>
                    •Ulalo
                  </h5>
                  <a
                    className="mt-5"
                    href="https://x.com/ulalo_io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-info fs-2 mt-2" />
                  </a>
                  <p className="card-text text-light fs-4">
                    Job: Boosted project visibility and brand awareness within
                    the Web3 community.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card bg-secondary h-100">
                <div className="card-body">
                  <h5 className="card-title fs-2" style={{ color: "#1E90FF" }}>
                    •Onlyplayclub
                  </h5>
                  <a
                    className="mt-5"
                    href="https://x.com/onlyplayclub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-info fs-2 mt-2" />
                  </a>
                  <p className="card-text text-light fs-4">
                    Job: Increased their reach by growing followers from 8K to
                    over 15K in a week, significantly enhancing visibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card bg-secondary h-100">
                <div className="card-body">
                  <h5 className="card-title fs-2" style={{ color: "#1E90FF" }}>
                    •Babesmemcoin (Ongoing)
                  </h5>
                  <a
                    className="mt-5"
                    href="https://x.com/babesmemecoin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-info fs-2 mt-2" />
                  </a>
                  <p className="card-text text-light fs-4">
                    Job: Currently driving adoption by supporting VIP badge
                    sales and strengthening community engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card bg-secondary h-100">
                <div className="card-body">
                  <h5 className="card-title fs-2" style={{ color: "#1E90FF" }}>
                    •Switchive (Ongoing)
                  </h5>
                  <a
                    className="mt-5"
                    href="https://x.com/switchive"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-info fs-2 mt-2" />
                  </a>
                  <p className="card-text text-light fs-4">
                    Job: Assisting with brand visibility and onboarding new
                    users through active referrals and promotions.
                  </p>
                </div>
              </div>
            </div>
            <footer className="bg-dark text-light text-center py-1 mt-5">
  <p className="mb-2">© 2025 Melissa | All Rights Reserved</p>
  <div className="d-flex justify-content-center gap-3 fs-4">
    <a href="https://x.com/0xmelissa19" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="text-info" />
    </a>
    <a href="https://t.me/vera1294" target="_blank" rel="noopener noreferrer">
      <FaTelegram className="text-primary" />
    </a>
    <a href="https://discord.gg/vVV24ynZ" target="_blank" rel="noopener noreferrer">
      <FaDiscord className="text-light" />
    </a>
  </div>
  <p className="mt-3 fst-italic text-light">
    “Building the decentralized future, one block at a time.”
  </p>
</footer>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
