<?php

/**
 * Class Brizy_Admin_Cloud_AbstractUploader
 */
abstract class Brizy_Admin_Cloud_AbstractUploader implements Brizy_Admin_Cloud_UploaderInterface {

	/**
	 * @var Brizy_Admin_Cloud_Client
	 */
	protected $client;

	/**
	 * Brizy_Admin_Cloud_AbstractUploader constructor.
	 *
	 * @param Brizy_Admin_Cloud_Client $client
	 */
	public function __construct( Brizy_Admin_Cloud_Client $client ) {
		$this->client = $client;
	}
}