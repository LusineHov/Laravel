<?php
namespace App\Services;

use App\Contracts\PhotosServiceInterface;

class PhotosService implements PhotosServiceInterface
{
	public function __construct(Photo $photo)
	{
		$this->photo = $photo;
	}


	public function getAllPhotos()
	{
		$photos = $this->photo->all();
		echo 'variant';
		return $photos;
	}

	public function getAllPhotosByID()
	{

		echo '2 variant id';
	}
}