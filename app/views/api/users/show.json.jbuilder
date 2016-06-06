json.id @user.id
json.username @user.username.capitalize
json.Email @user.email
json.image_url @user.image_url
json.Activity @user.created_at.strftime("Joined in %B %Y")
