import { FaNewspaper, FaUsers, FaGlobe, FaBullseye , FaEnvelope, FaPhoneAlt, FaMapMarkerAlt} from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-base-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-primary">About Dragon News</h2>
          <p className="mt-6 text-gray-500 leading-8">
            Dragon News is a modern digital news platform built to keep readers
            informed with reliable, up-to-date, and engaging stories. Our goal
            is to make news easy to discover through a fast, clean, and
            user-friendly experience.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-base-200 rounded-2xl p-8 shadow hover:shadow-lg transition">
            <FaNewspaper className="text-5xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Trusted News
            </h3>
            <p className="text-gray-500">
              We focus on presenting news in a clear, organized, and accessible
              way for readers.
            </p>
          </div>

          <div className="bg-base-200 rounded-2xl p-8 shadow hover:shadow-lg transition">
            <FaGlobe className="text-5xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Global Coverage
            </h3>
            <p className="text-gray-500">
              Stay updated with stories from around the world across multiple
              categories.
            </p>
          </div>

          <div className="bg-base-200 rounded-2xl p-8 shadow hover:shadow-lg transition">
            <FaBullseye className="text-5xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Our Mission
            </h3>
            <p className="text-gray-500">
              To provide timely, informative, and engaging news while delivering
              an exceptional user experience.
            </p>
          </div>

          <div className="bg-base-200 rounded-2xl p-8 shadow hover:shadow-lg transition">
            <FaUsers className="text-5xl text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Community
            </h3>
            <p className="text-gray-500">
              We value our readers and continuously improve our platform based
              on user needs and feedback.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-primary text-white rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="mt-2">Daily Articles</p>
          </div>

          <div className="bg-primary text-white rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold">25+</h3>
            <p className="mt-2">News Categories</p>
          </div>

          <div className="bg-primary text-white rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="mt-2">News Updates</p>
          </div>

          <div className="bg-primary text-white rounded-xl p-8 text-center">
            <h3 className="text-4xl font-bold">10K+</h3>
            <p className="mt-2">Happy Readers</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 mt-5">
          <h2 className="text-4xl font-bold text-primary">Contact Us</h2>
          <p className="mt-4 text-gray-500">
            We'd love to hear from you. Whether you have questions, feedback,
            or suggestions, feel free to reach out to the Dragon News team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-base-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-primary text-2xl" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-500">
                    support@dragonnews.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-primary text-2xl" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-500">
                    +880 1234-567890
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-primary text-2xl" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-500">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-base-200 rounded-2xl p-8 shadow-lg">
            <form className="space-y-5">
              <div>
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="textarea textarea-bordered w-full"
                ></textarea>
              </div>

              <button className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;