<?php
    $ch = curl_init();

    $post['key'] = 'ZX13fHxpeDA6XTwTYistIHxjImEzKjgtM3p_LXMgKDVjITosNSA,';
    $post['id'] = 0;
    $post['userfile'] = "@/var/www/secret/nasa.png";

    $custom_fields = array
    (
        'resourcetype'      => 1,
        'collectionname'    => 'kapostCollection',
        'post_id'           => '666',
        'creator'           => 'Kapost Photography'
    );
    $post['custom_fields'] = http_build_query($custom_fields);

    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
    curl_setopt($ch, CURLOPT_URL, 'http://ioninteractive.com/plugins/api_kapost');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_USERAGENT, "Kapost Resource Space Client");

    $body = curl_exec($ch);

    curl_close($ch);

    echo $body;
?>