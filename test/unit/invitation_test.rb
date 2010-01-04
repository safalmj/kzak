require 'test_helper'

class InvitationTest < ActiveSupport::TestCase

  test "make" do
    i = Invitation.make
    assert i.valid?
  end
  
  test "generates code before create" do
    i = Invitation.make
    assert i.code.present?
  end
  
  test "requires user and email" do
    i = Invitation.new
    assert !i.valid?
    assert i.errors.on(:user_id)
    assert i.errors.on(:email)
  end
  
  test "belongs to a user" do
    u = User.make
    i = Invitation.make(:user => u)
    assert_equal u, i.user
  end
  
  test "validates format of email" do
    i = Invitation.new
    i.email = 'with a space'
    assert !i.valid?
    assert i.errors.on(:email)
    i.email = 'invalid!chars'
    assert !i.valid?
    assert i.errors.on(:email)
    i.email = 'no_domain'
    assert !i.valid?
    assert i.errors.on(:email)
  end
  
end
