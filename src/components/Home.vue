<template>
<div class="Home">

<section class="hero is-large first-slide-bg">
	<div class="hero-body">
		<div class="container has-text-centered animated fadeInUp">
			<h1 class="title">
				<span class="banner-text">Anonymous hosting made easy.</span>
			</h1>
			<h2 class="subtitle animated fadeIn">
				<span class="banner-subtext">No need to make shit complicated.</span>
			</h2>
		</div>
	</div>
</section>

<section class="hero is-medium is-gry">
	<div class="hero-body">
		<div class="container has-text-centered">
			<div class="columns">
				<div class="column is-4 has-text-centered">
					<div class="box">
						<img src="../assets/img/ssd.png">
						<p class="box-text">
							We have the latest technology where speed, efficiency, and reliability is a given.
						</p>
					</div>
				</div>
				<div class="column is-4 has-text-centered">
					<div class="box">
						<img src="../assets/img/anon.png">
						<p class="box-text">
							Your identity will never be compromised because we don't and never will require it.
						</p>
					</div>
				</div>
				<div class="column is-4 has-text-centered">
					<div class="box">
						<img src="../assets/img/chat.png">
						<p class="box-text">
							Our customer support and ticket system are optimized for a smooth user experience.
						</p>
					</div>
				</div>
			</div>
			<div class="columns">
				<div class="column is-4 has-text-centered">
					<div class="box">
						<img src="../assets/img/cloud.png">
						<p class="box-text">
							Our cloud backup is allows for instant rapid data recovery leaving you with a peace of mind.
						</p>
					</div>
				</div>
				<div class="column is-4 has-text-centered">
					<div class="box">
						<img src="../assets/img/cog.png">
						<p class="box-text">
							We currently offer Vesta as our standard control panel for seamless management.
						</p>
					</div>
				</div>
				<div class="column is-4 has-text-centered">
					<div class="box">
						<img src="../assets/img/zip.png">
						<p class="box-text">
							Your files are secure, we will never be under any obligation to release them to any third-party.*
						</p>
					</div>
				</div>
			</div>
			<span style="color: #696758"><em>* As long as hosted content doesn't violate our <a href="#">ToS</a>.</em></span>
		</div>
	</div>
</section>

<section class="hero is-medium is-gry buy-bg">
	<div class="hero-body no-pad-top">
		<div class="container has-text-centered">
			<span class="banner-text choice">
				Shared, VPS, or Dedicated, we have it all.
			</span>
		</div>
		<br>
		<div class="container has-text-centered">
			<router-link to="/plans" class="banner-text button is-dark is-large">
				view our plans&nbsp;&nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i>
			</router-link>
		</div>
	</div>
</section>

</div>

</template>

<script></script>

<style scoped src="../assets/css/main.css"></style>
