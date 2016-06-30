Template.winter.events({
  'submit .winterSignUpInfo': function (event) {
    event.preventDefault();
    const email = event.target.winterSignUpInfo.value;
    Klaviyo.addUserToListDirectly(email, 'kd2X6i');
    event.target.winterSignUpInfo.value = '';
    swal("Thank you!", `${email} will receive updates on GetOutfitted's winter products.`, "success")
  }
});
