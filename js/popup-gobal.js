
const popupGoabl = `
 <div id="popupForm" class="popup-overlay  popupControl">
	<div class="popup-content">
		<span class="close-button">&times;</span>
		<h3 >Share your details</h3>
        <p>Our team will get in touch to explore how we can support your growth journey</p>
		<form id="form">
			<input type="text" id="name" name="name" required placeholder="Your Name">
			<input type="email" id="email" name="email" required placeholder="Your Email Id">
			<input type="number" id="number" name="Phone number" required placeholder="Your Phone Number">
			<select name="" id="">
				<option value="Job Role" selected>Choose Category eg : Design Studio</option>
				<option value="Job Role">Development</option>
				<option value="Job Role">Motion Lab</option>
			</select>
            <input type="text" id="Company Name" name="Company Name" required placeholder="Company Name">

		

			<label class="trem">
				<input type="checkbox" id="terms" name="terms" required checked>
				I agree to the  the <a href="#">privacy policy</a>
			</label>
			<!-- Hidden input to store the button name -->
			<input type="hidden" id="buttonName" name="buttonName" />
			<input type="submit" id="submitBtn1" value="Submit Now"></input>
		</form>
	</div>
</div>

`
document.getElementById('popupGoabl').innerHTML = popupGoabl			

