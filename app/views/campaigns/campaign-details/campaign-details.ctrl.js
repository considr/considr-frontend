    /*======================================
    =            Initialization            =
    ======================================*/
    angular
        .module('consider-me')
        .controller('campaignDetailsCtrl', function ($scope,$stateParams) {

$scope.availableParliamentarians=[{"active":true,"last_updated":null,"country":"germany","member_id":"1","full_name":"Jan van Aken","party":"Die Linke","parliament_member_url":"http://www.bundestag.de/abgeordnete18/biografien/A/aken_jan/258124","party_member_url":"https://www.linksfraktion.de/fraktion/abgeordnete/profil/jan-van-aken/","personal_url":"http://www.jan-van-aken.de/","photo_main_url":"http://www.bundestag.de/image/240714/3x4/122/163/be23238d3921acf3e9fa694ab1ae41f8/UK/aken_jan_gross.jpg","photo_backup_url":"https://www.linksfraktion.de/fileadmin/user_upload/MdB_Header/mdb-header-jan-van-aken-01.jpg","constituency_main":"Hamburg","constituency_detail":"Hamburg-Altona","constituency_number":"019","profession":"Biologe","office_constituency_main":"Berlin","office_address_main":"Platz der Republik 1","office_postal_code_main":"11011","office_location_main":"Berlin","office_email_main":"jan.vanaken@bundestag.de","office_phonenumber_main":"+4930/227-73486","office_constituency_backup":"Hamburg","office_address_backup":"Wendenstr. 6","office_postal_code_backup":"20097","office_location_backup":"Hamburg","office_email_backup":"jan.vanaken.wk@bundestag.de","office_phonenumber_backup":"040/280565-46","ministerial_role_information":"","birth_details":"Geboren am 01. Mai 1961","confession":"","family_status":"","parliament_join_date":"","extra_role_information":"","extra_role_information2":"","legislation_number":"","calling_score":0,"id":"592184f607cd6425b06c0353"},{"active":true,"last_updated":null,"country":"germany","member_id":"24","full_name":"Dr. Matthias Bartke","party":"SPD","parliament_member_url":"http://www.bundestag.de/abgeordnete18/biografien/B/bartke_matthias/258210","party_member_url":"http://www.spdfraktion.de/abgeordnete/bartke?wp=18","personal_url":"http://matthias-bartke.de/","photo_main_url":"http://www.bundestag.de/image/240768/3x4/235/314/d6419613c42f28e50a833c40e9e7ea44/eP/bartke_matthias_gross.jpg","photo_backup_url":"http://www.spdfraktion.de/system/files/styles/tablet_spdfraktion_1x_person_big/private/images/bartke_matthias_615x720.jpg?itok=g23qdJ4g&timestamp=1458319448","constituency_main":"Hamburg","constituency_detail":"Hamburg-Altona","constituency_number":"019","profession":"Jurist","office_constituency_main":"Berlin","office_address_main":"Platz der Republik 1","office_postal_code_main":"11011","office_location_main":"Berlin","office_email_main":"matthias.bartke@bundestag.de","office_phonenumber_main":"030 / 227 77150","office_constituency_backup":"Hamburg","office_address_backup":"Max-Brauer-Allee 20","office_postal_code_backup":"22765","office_location_backup":"Hamburg","office_email_backup":"matthias.bartke@bundestag.de","office_phonenumber_backup":"040  / 27148730","ministerial_role_information":"","birth_details":"16.01.1959 in Bremen","confession":"","family_status":"","parliament_join_date":"","extra_role_information":"Arbeitsgruppe Inklusion","extra_role_information2":"","legislation_number":"18","calling_score":0,"id":"592184f607cd6425b06c039d"},{"active":true,"last_updated":null,"country":"germany","member_id":"615","full_name":"Marcus Weinberg","party":"CDU/CSU","parliament_member_url":"http://www.bundestag.de/abgeordnete18/biografien/W/weinberg_marcus/259200","party_member_url":"https://www.cducsu.de/abgeordnete/marcus-weinberg","personal_url":"http://www.marcusweinberg.de/","photo_main_url":"http://www.bundestag.de/image/241760/3x4/235/314/d1327d6be7c476f46a583538b311c39a/bg/weinberg_marcus_gross.jpg","photo_backup_url":"https://www.cducsu.de/sites/default/files/styles/abgeordneter_detail_225x225/public/weinberg-marcus-_portrait.jpg?itok=Xc4nUF41","constituency_main":"Hamburg","constituency_detail":"Hamburg-Altona","constituency_number":"019","profession":"Lehrer","office_constituency_main":"Berlin","office_address_main":"Platz der Republik 1","office_postal_code_main":"11011","office_location_main":"Berlin","office_email_main":"marcus.weinberg@bundestag.de","office_phonenumber_main":"030/227-74092","office_constituency_backup":"Hamburg-Altona (19)","office_address_backup":"Schmarjestraße 50","office_postal_code_backup":"22767","office_location_backup":"Hamburg","office_email_backup":"marcus.weinberg@wk.bundestag.de","office_phonenumber_backup":"030/227-74092","ministerial_role_information":"Vorsitzender der Arbeitsgruppe Familie, Senioren, Frauen und Jugend","birth_details":"Geboren am 04.06.1967 in Hamburg","confession":"evangelisch","family_status":"ledig","parliament_join_date":"Mitglied des Deutschen Bundestages: seit 18.10.2005 (16. Wahlperiode)","extra_role_information":"","extra_role_information2":"","legislation_number":"","calling_score":0,"id":"592184f607cd6425b06c0574"}];

$scope.variables={
	currentParliamentariansIndex:0,
}

    /*=====  End of Initialization  ======*/


    /*=================================
    =            Functions            =
    =================================*/

$scope.nextParliamentarian=function(){
	if($scope.variables.currentParliamentariansIndex<($scope.availableParliamentarians.length-1))
	    $scope.variables.currentParliamentariansIndex++;
	else
		alert("We are sorry")
}

    /*=====  End of Functions  ======*/

    /*==============================
    =            Events            =
    ==============================*/



    /*=====  End of Events  ======*/


    });


    