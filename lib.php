<?php


  function theme_frank_is_admin($userId) {
    $admins = get_admins();
    foreach($admins as $admin){
      if ($admin->id == $userId) {
        $isAdmin = true;
        return $isAdmin;
        break;
      }
    }
  }

  function theme_frank_moodle_folder($rootUrl) {
    $subject = $rootUrl;
    $pattern = '/(?:https?:\/\/)?(?:[a-z\s...]{1,})\/([a-z-_\s...]{1,})/';
    preg_match($pattern, $subject, $matches);
    return $matches[1];
  }
?>
