export default function HeroProductShowcase() {
  return (
    <div className="product-showcase" aria-hidden="true">
      <div className="product-window product-window-animated">
        <div className="window-bar">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
          <span className="window-title">travel-ui.system</span>
          <span className="window-live">MORPHING</span>
        </div>

        <div className="window-content product-scene-stage">
          <section className="product-scene product-scene-flight">
            <div className="scene-kicker-row">
              <span>Flight search · Desktop</span>
              <b>01 / 07</b>
            </div>
            <div className="route-line">
              <div>
                <span className="micro-label">FROM</span>
                <strong>CMB</strong>
                <small>Colombo</small>
              </div>
              <div className="route-path">
                <span />
                <i>✦</i>
                <span />
              </div>
              <div>
                <span className="micro-label">TO</span>
                <strong>ANY</strong>
                <small>Good idea</small>
              </div>
            </div>
            <div className="search-row">
              <div>
                <span className="micro-label">DEPART</span>
                <strong>12 AUG</strong>
              </div>
              <div>
                <span className="micro-label">TRAVELLERS</span>
                <strong>02</strong>
              </div>
              <button type="button" tabIndex={-1}>Search</button>
            </div>
            <div className="result-card">
              <div className="result-visual">
                <span>09:40</span>
                <i />
                <span>18:20</span>
              </div>
              <div className="result-meta">
                <span>Recommended journey</span>
                <strong>Clear by design</strong>
              </div>
              <div className="result-price">
                <small>from</small>
                <strong>£648</strong>
              </div>
            </div>
          </section>

          <section className="product-scene product-scene-mobile">
            <div className="scene-kicker-row">
              <span>Flight search · Mobile</span>
              <b>02 / 07</b>
            </div>
            <div className="mobile-scene-layout">
              <div className="mobile-search-ui">
                <div className="mobile-ui-top">
                  <span>‹</span>
                  <strong>Flights</strong>
                  <span>•••</span>
                </div>
                <h3>Where next?</h3>
                <div className="mobile-route-field">
                  <span className="mobile-route-dot mobile-route-dot-from" />
                  <div>
                    <small>From</small>
                    <strong>Colombo · CMB</strong>
                  </div>
                </div>
                <div className="mobile-route-field">
                  <span className="mobile-route-dot mobile-route-dot-to" />
                  <div>
                    <small>To</small>
                    <strong>Anywhere</strong>
                  </div>
                </div>
                <div className="mobile-search-meta">
                  <span><small>Dates</small><strong>12 — 19 Aug</strong></span>
                  <span><small>Guests</small><strong>2 adults</strong></span>
                </div>
                <button type="button" tabIndex={-1}>Search flights ↗</button>
              </div>
              <div className="mobile-scene-note">
                <span>Responsive by default</span>
                <strong>One flow.<br />Every screen.</strong>
                <i>320 → 1440</i>
              </div>
            </div>
          </section>

          <section className="product-scene product-scene-package">
            <div className="scene-kicker-row">
              <span>Holiday package</span>
              <b>03 / 07</b>
            </div>
            <article className="travel-card package-card-ui">
              <div className="travel-card-visual package-visual">
                <span className="travel-card-tag">7 nights</span>
                <i className="visual-sun" />
                <i className="visual-hill visual-hill-one" />
                <i className="visual-hill visual-hill-two" />
                <strong>SRI<br />LANKA</strong>
              </div>
              <div className="travel-card-copy">
                <span className="micro-label">SIGNATURE JOURNEY</span>
                <h3>Island rhythm</h3>
                <p>Colombo · Ella · Galle</p>
                <div className="travel-feature-row">
                  <span>Hotel</span><span>Rail</span><span>Guide</span>
                </div>
                <div className="travel-card-price">
                  <span><small>from</small><strong>£1,249</strong></span>
                  <b>View package ↗</b>
                </div>
              </div>
            </article>
          </section>

          <section className="product-scene product-scene-hotel">
            <div className="scene-kicker-row">
              <span>Hotel discovery</span>
              <b>04 / 07</b>
            </div>
            <article className="travel-card hotel-card-ui">
              <div className="travel-card-visual hotel-visual">
                <span className="travel-card-tag">Guest favourite</span>
                <div className="hotel-building">
                  <i /><i /><i /><i /><i /><i />
                </div>
                <small>GALLE · SRI LANKA</small>
              </div>
              <div className="travel-card-copy">
                <div className="hotel-rating"><span>★★★★★</span><b>9.4</b></div>
                <span className="micro-label">BOUTIQUE STAY</span>
                <h3>Fort House</h3>
                <p>Ocean-facing rooms inside the historic fort.</p>
                <div className="room-options">
                  <span>Breakfast included</span>
                  <span>Free cancellation</span>
                </div>
                <div className="travel-card-price">
                  <span><small>per night</small><strong>£186</strong></span>
                  <b>Choose room ↗</b>
                </div>
              </div>
            </article>
          </section>

          <section className="product-scene product-scene-activity">
            <div className="scene-kicker-row">
              <span>Things to do</span>
              <b>05 / 07</b>
            </div>
            <article className="activity-ticket">
              <div className="activity-visual">
                <span className="travel-card-tag">Top activity</span>
                <div className="activity-wave activity-wave-one" />
                <div className="activity-wave activity-wave-two" />
                <strong>WHALE<br />WATCH</strong>
              </div>
              <div className="activity-copy">
                <span className="micro-label">MIRISSA · 4 HOURS</span>
                <h3>Blue-water morning</h3>
                <p>Small-group ocean experience with a local naturalist.</p>
                <div className="activity-slots">
                  <span>06:00</span><span>06:30</span><span>07:00</span>
                </div>
                <div className="activity-footer">
                  <strong>£42 <small>/ person</small></strong>
                  <b>Reserve ↗</b>
                </div>
              </div>
            </article>
          </section>

          <section className="product-scene product-scene-cruise">
            <div className="scene-kicker-row scene-kicker-row-light">
              <span>Cruise discovery</span>
              <b>06 / 07</b>
            </div>
            <article className="cruise-card-ui">
              <div className="cruise-heading">
                <div>
                  <span className="micro-label">7-NIGHT MEDITERRANEAN</span>
                  <h3>Coast to coast</h3>
                </div>
                <strong>£899</strong>
              </div>
              <div className="cruise-route">
                <div><b>BCN</b><small>Barcelona</small></div>
                <span><i /><i /><i /><i /></span>
                <div><b>ROM</b><small>Rome</small></div>
              </div>
              <div className="cruise-ports">
                <span>Palma</span><span>Marseille</span><span>La Spezia</span>
              </div>
              <div className="cruise-footer">
                <span>Ocean view · Full board</span>
                <b>Explore sailing ↗</b>
              </div>
            </article>
          </section>

          <section className="product-scene product-scene-destination">
            <div className="scene-kicker-row">
              <span>Destination guide</span>
              <b>07 / 07</b>
            </div>
            <article className="destination-card-ui">
              <div className="destination-code">
                <span>35.0116° N</span>
                <span>135.7681° E</span>
              </div>
              <div className="destination-orbit">
                <i /><i /><i />
              </div>
              <div className="destination-copy">
                <span className="micro-label">CITY GUIDE · JAPAN</span>
                <h3>KYOTO</h3>
                <p>Quiet temples, precise craft and a city designed in layers.</p>
                <div>
                  <span><strong>18</strong><small>places</small></span>
                  <span><strong>04</strong><small>routes</small></span>
                  <b>Open guide ↗</b>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}
