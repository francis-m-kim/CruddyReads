json.id @user.id
json.username @user.username.capitalize
json.Email @user.email
json.image_url asset_path(@user.avatar.url)

json.Activity @user.created_at.strftime("Joined in %B %Y")
