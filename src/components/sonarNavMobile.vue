<template>
		<nav class="nav-mobile">
			<ul class="nav-list">
				<li>
					<router-link to="/">
						<sonarLogo />
					</router-link>
				</li>
				<li class="nav-cta">
					<svg width="22" height="22">
						<path d="M 0 6 C 0 5.448 0.448 5 1 5 L 21 5 C 21.552 5 22 5.448 22 6 L 22 6 C 22 6.552 21.552 7 21 7 L 1 7 C 0.448 7 0 6.552 0 6 Z" fill="hsl(0, 0%, 0%)"></path>
						<path d="M 0 16 C 0 15.448 0.448 15 1 15 L 21 15 C 21.552 15 22 15.448 22 16 L 22 16 C 22 16.552 21.552 17 21 17 L 1 17 C 0.448 17 0 16.552 0 16 Z" fill="hsl(0, 0%, 0%)"></path>
					</svg>
				</li>
			</ul>
			<div class="nav-sub">
				<ul>
					<li>
						<p class="small">Solutions</p>
					</li>
					<li>
						<router-link to="/solutions/enterprise">
							<i class="icon-enterprise iconNav"></i>
							Enterprise
						</router-link>
					</li>
						<li>
							<router-link to="/solutions/wisp">
								<i class="icon-wisp iconNav"></i>
								WISP
							</router-link>
						</li>
						<li>
							<router-link to="/solutions/fiber">
								<i class="icon-fiber iconNav"></i>
								Fiber
							</router-link>
						</li>
						<li>
							<router-link to="/solutions/mdu">
								<i class="icon-mdu iconNav"></i>
								MDU
							</router-link>
						</li>
						<li>
							<router-link to="/solutions/voice">
								<i class="icon-voice iconNav"></i>
								Voice
							</router-link>
						</li>
						<li>
							<router-link to="/solutions/cable">
								<i class="icon-cable1 iconNav"></i>
								Cable
							</router-link>
						</li>
				</ul>
				<ul>
					<li>
						<p class="small">Resources</p>
					</li>
					<li>
						<router-link to="/whysonar">
							<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
								<path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
							</svg>
							Why Sonar
						</router-link>
					</li>
<!--					<li class="has-sub" @click="goTodetail">Why Sonar</li>-->
						<li>
							<router-link to="/casts">
								<svg width="26" height="26">
									<path d="M 13 0 C 20.18 0 26 5.82 26 13 C 26 20.18 20.18 26 13 26 C 5.82 26 0 20.18 0 13 C 0 5.82 5.82 0 13 0 Z M 9 17.234 C 9 18.011 9.848 18.491 10.514 18.091 L 17.571 13.857 C 18.218 13.469 18.218 12.531 17.571 12.143 L 10.514 7.909 C 9.848 7.509 9 7.989 9 8.766 Z" fill="rgba(51, 51, 51, 1.00)"></path>
								</svg>
								Sonar Casts
							</router-link>
						</li>
						<li>
							<router-link to="/blog">
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
									<path d="M2 5v-5h20v5h-20zm13.909 13.223c.222 1.468-.186 4.534-1.341 5.702 2.201-1.174 5.938-4.884 7.432-6.881-1.286.9-4.044 1.657-6.091 1.179zm6.091-11.223v6c0 3.419-5.247 3.745-8.256 3 0 0 1.522 8-3.335 8h-8.409v-17h20zm-10 9h-6v1h6v-1zm6-3h-12v1h12v-1zm0-3h-12v1h12v-1z" />
								</svg>
								Blog
							</router-link>
						</li>
						<li>
							<router-link to="/case">
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
									<path d="M22 0h-17c-1.657 0-3 1.343-3 3v18c0 1.657 1.343 3 3 3h17v-20h-4v8l-2-2-2 2v-8h-8.505c-1.375 0-1.375-2 0-2h16.505v-2z" />
								</svg>
								Case Studies
							</router-link>
						</li>
						<li>
							<router-link to="/facebook">
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
									<path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
								</svg>
								Group
							</router-link>
						</li>
						<li>
							<router-link to="/demo">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9l10 7.675-4.236.71 2.659 5.422-2.44 1.193-2.675-5.474-3.308 2.863v-12.389zm0-5c-2.209 0-4 1.791-4 4 0 1.477.81 2.752 2 3.445v-1.225c-.609-.55-1-1.337-1-2.22 0-1.654 1.346-3 3-3s3 1.346 3 3c0 .246-.038.481-.094.709l.842.646c.154-.424.252-.877.252-1.355 0-2.209-1.791-4-4-4zm-2 9.65c-2.327-.826-4-3.044-4-5.65 0-3.309 2.691-6 6-6s6 2.691 6 6c0 .939-.223 1.824-.609 2.617l1.617 1.241c.631-1.145.992-2.459.992-3.858 0-4.418-3.581-8-8-8-4.418 0-8 3.582-8 8 0 3.727 2.551 6.849 6 7.738v-2.088z"/>
								</svg>
								Demo
							</router-link>
						</li>
				</ul>
				<ul>
				<li>
					<p class="small">Pricing</p>
				</li>
						<li>
							<router-link to="/pricing">
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
									<path d="M24 7v-2c0-2.761-2.238-5-5-5h-14c-2.761 0-5 2.239-5 5v2h10v2h-10v6h4v2h-4v2c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-2h-8v-2h8v-6h-5v-2h5zm-16 11c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4zm3 0c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4zm3 0c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4zm0-8c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4zm3 0c0 .552-.447 1-1 1s-1-.448-1-1v-4c0-.552.447-1 1-1s1 .448 1 1v4z" />
								</svg>
								Calculator
							</router-link>
						</li>
						<li>
							<router-link to="/enterprise">
								<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
									<path d="M6 7v-7h13v10h5v14h-23v-17h5zm0 16v-4h-1v4h1zm8-4h-3v4h3v-4zm6 0h-1v4h1v-4zm2-7h-3v6h2v4h1v-10zm-5-10h-9v20h1v-5h7v5h1v-20zm-13 20v-4h2v-9h-3v13h1zm17-6h-1v-2h1v2zm-17-2h1v2h-1v-2zm8 1h-2v-2h2v2zm3 0h-2v-2h2v2zm-10-4v2h-1v-2h1zm7 1h-2v-2h2v2zm3 0h-2v-2h2v2zm-3-3h-2v-2h2v2zm3 0h-2v-2h2v2zm-3-3h-2v-2h2v2zm3 0h-2v-2h2v2z" />
								</svg>
								Enterprise
							</router-link>
						</li>
						<li>
							<router-link to="/blog">
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
									<path d="M16 0c-3.169 0-6 2.113-6 5.003 0 1.025.369 2.032 1.023 2.812.027.916-.512 2.228-.996 3.184 1.301-.235 3.15-.754 3.988-1.268.708.172 1.387.251 2.028.251 3.543 0 5.956-2.418 5.956-4.98.001-2.904-2.85-5.002-5.999-5.002zm-2.5 5.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75zm2.5 0c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75zm2.5 0c-.414 0-.75-.336-.75-.75s.336-.75.75-.75.75.336.75.75-.336.75-.75.75zm-6.5 6.854v5.396h-8v-10h4.766c-.649-1.216-.913-2.564-.674-4h-4.092c-1.105 0-2 .896-2 2v14.678c-.002 2.213 2.503 3.322 6.006 3.322 3.498 0 5.994-1.106 5.994-3.322v-8.725c-.635.257-1.34.476-2 .651zm-4 9.396c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1z" />
								</svg>
								Contact Sales
							</router-link>
						</li>
				</ul>
				<ul>
					<li>
						<p class="small">Developer</p>
					</li>
						<li>
							<router-link to="/docs">
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
									<path d="M 1 4 C 1 1.791 2.791 0 5 0 L 14 0 C 14.552 0 15 0.448 15 1 L 15 7 C 15 8.657 16.343 10 18 10 L 24 10 C 24.552 10 25 10.448 25 11 L 25 22 C 25 24.209 23.209 26 21 26 L 5 26 C 2.791 26 1 24.209 1 22 Z" fill="#333"></path>
									<path d="M 17 1.207 C 17 0.762 17.539 0.539 17.854 0.854 L 24.146 7.146 C 24.461 7.461 24.238 8 23.793 8 L 18 8 C 17.448 8 17 7.552 17 7 Z" fill="rgba(51, 51, 51, 1.00)"></path>
								</svg>
								Documentation
							</router-link>
						</li>
						<li>
							<router-link to="/api">
								<svg xmlns="http://www.w3.org/2000/svg" width="28" height="26">
									<path d="M 11.707 1.184 C 13.145 0.441 14.855 0.441 16.293 1.184 L 26.057 6.223 C 27.5 6.968 27.5 9.032 26.057 9.777 L 16.752 14.58 C 15.025 15.471 12.975 15.471 11.248 14.58 L 1.943 9.777 C 0.5 9.032 0.5 6.968 1.943 6.223 Z" fill="rgba(51, 51, 51, 1.00)"></path>
									<path d="M 26.057 16.223 C 27.5 16.968 27.5 19.032 26.057 19.777 L 16.752 24.58 C 15.025 25.471 12.975 25.471 11.248 24.58 L 1.943 19.777 C 0.5 19.032 0.5 16.968 1.943 16.223 L 6.25 14 L 11.707 16.816 C 13.145 17.559 14.855 17.559 16.293 16.816 L 21.75 14 Z" fill="rgba(51, 51, 51, 1.00)"></path>
								</svg>
								API <span class="badge">V2</span>
							</router-link>
						</li>
						<li>
							<router-link to="/github">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/>
								</svg>
								GitHub
							</router-link>
						</li>
				</ul>
				<ul>
					<li>
					<p class="small">Company</p>
					</li>
						<li>
							<router-link to="/leadership">
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
									<path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
								</svg>
								Leadership
							</router-link>
						</li>
						<li>
							<router-link to="/investors">
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
									<path d="M7 21h-4v-11h4v11zm7-11h-4v11h4v-11zm7 0h-4v11h4v-11zm2 12h-22v2h22v-2zm-23-13h24l-12-9-12 9z" />
								</svg>
								Investors
							</router-link>
						</li>
						<li>
							<router-link to="/news">
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
									<path d="M7 16h13v1h-13v-1zm13-3h-13v1h13v-1zm0-6h-5v1h5v-1zm0 3h-5v1h5v-1zm-17-8v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 17h-17v-15h17v15zm-9-12h-6v4h6v-4z" />
								</svg>
								Newsroom
							</router-link>
						</li>
						<li>
							<router-link to="/events">
								<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
									<path d="M20 19h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm16-14v22h-24v-22h24zm-2 6h-20v14h20v-14zm-8 8h-4v4h4v-4zm-6-6h-4v4h4v-4z" />
								</svg>
								Events
							</router-link>
						</li>
						<li>
							<router-link to="/careers">
								<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
									<path d="M5.829 21c-.412 1.165-1.524 2-2.829 2-1.656 0-3-1.344-3-3s1.344-3 3-3c1.305 0 2.417.835 2.829 2h3.342c.412-1.165 1.524-2 2.829-2 1.305 0 2.417.835 2.829 2h3.342c.412-1.165 1.524-2 2.829-2 1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.305 0-2.417-.835-2.829-2h-3.342c-.412 1.165-1.524 2-2.829 2-1.305 0-2.417-.835-2.829-2h-3.342zm6.171-2c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-18c-2.624 0-5 2.127-5 4.751 0 2.624 2.168 5.756 5 10.249 2.832-4.493 5-7.625 5-10.249 0-2.624-2.376-4.751-5-4.751zm0 7c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" />
								</svg>
								Careers
							</router-link>
						</li>
				</ul>

			</div>
		</nav>
</template>

<script>
import sonarLogo from './sonarLogo.vue'
export default {
	name: 'sonarNavMobile',
	components: { sonarLogo }
}
</script>
<style>
	.iconNav {
		margin-right: 10px;
		font-size: 24px;
	}
</style>
