<template>
    <footer>
        <div id="links">
                <ul>
                <li id="contatos"><img :src="require('@/assets/images/footer/wpp.png')">(19)98131-1944</li>
                <li id="contatos"><img :src="require('@/assets/images/footer/ig.png')"><a href="https://www.instagram.com/ramonrochafotografia/">@ramonrochafotografia</a></li>
                <li id="contatos" class="fb"><img :src="require('@/assets/images/footer/fb.png')"><a href="https://www.facebook.com/ramon.santos.54922">Ramon Rocha</a></li>
                </ul>
        </div>
    </footer>        

</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer {
    display: block;
    background-image: radial-gradient(#041690, #000039);
	color:white;
	border-top:solid 2px tan;
    padding: 5px;
}

ul {
    text-align: center;
}

li {
	font-size: 18px;
	font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin: 1.5% 1.5%;
	display:inline-block;
    width: 30%;
}

a {
	text-decoration:none;
    text-align: center;
	color:white;
}

img {
	width:20px;
	height:20px;
	margin-right:5px;
}

@media (max-width: 800px) {
    footer {
        justify-items: center;
    }

    li {
        display: block;
        text-align: center;
        width: 100%;
        margin: auto;
    }
}

</style>