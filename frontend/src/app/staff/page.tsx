
export default async function Page() {
	return (
		<div className="video-container" style={{ position: 'relative', maxWidth: '200%', maxHeight: '200%', overflow: 'hidden', margin: -20, marginLeft: -100, marginRight: -100 }}>
			<video autoPlay loop muted style={{ width: '200%', height: 'auto', position: 'relative', zIndex: 0 }}>
				<source src="/bg2.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="banner-home-rt-wrap" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
				<div className="banner-home-rt-top">
					<h1 className="banner-home-rt-title" style={{ fontWeight: 'bold', color: 'white', maxWidth: '100%', margin: '0 auto', fontSize: '40px' }}>
						Welcome to MagicPost
					</h1>
					<div className="banner-home-rt-text" style={{ color: 'white', maxWidth: '80%', fontSize: '24px', lineHeight: '1.5', textAlign: 'left' }}>
						Transforming logistics effortlessly, MagicPost streamlines every step of your transfer, trade, and shipping processes. Manage, track, and expedite with precision.nd make a positive impact on society.
					<a href="http://www.vinai.io/product/" target="" className="btn bor" style={{ marginTop: 20 }}>
						<span className="btn-text" style={{ color: 'white' }}>
							See our policies
						</span>
					</a>
					</div>
				</div>
			</div>
			</div>

	);
		}