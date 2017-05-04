<template>
	<div class="Plans">
		<section class="hero is-medium is-gry">
			<div class="hero-body">
				<div class="container">
					<div class="columns">
						<div class="column is-4">
							<div class="box has-text-centered">
								<div class="banner-text choice">
									Shared
								</div>
								<div class="banner-subtext subbox">
									starting at <hr> &euro;<span class="price">4.95</span>/month
								</div>
								<br>
								<router-link to="/shared" class="banner-text button box-button is-dark is-medium">
									view more info &nbsp;<i class="fa fa-chevron-right"></i>
								</router-link>
							</div>
						</div>
						<div class="column is-4">
							<div class="box has-text-centered">
								<div class="banner-text choice">
									VPS
								</div>
								<div class="banner-subtext subbox">
									starting at <hr> &euro;<span class="price">14.95</span>/month
								</div>
								<br>
								<router-link to="/vps" class="banner-text button box-button is-dark is-medium">
									view more info &nbsp;<i class="fa fa-chevron-right"></i>
								</router-link>
							</div>
						</div>
						<div class="column is-4">
							<div class="box has-text-centered">
								<div class="banner-text choice">
									Dedicated
								</div>
								<div class="banner-subtext subbox">
									starting at <hr> &euro;<span class="price">99.95</span>/month
								</div>
								<br>
								<router-link to="/dedicated" class="banner-text button box-button is-dark is-medium">
									view more info &nbsp;<i class="fa fa-chevron-right"></i>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
</script>

<style scoped src="../assets/css/main.css"></style>
